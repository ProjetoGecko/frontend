import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { UserState } from '../../store/token/Reducer'
import Categoria from '../../models/Categoria'
import { busca } from '../../services/Service'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { toast } from 'react-toastify'
import './BarraPesquisa.css'

function BarraPesquisa() {
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function getCategorias() {
        try {
            await busca(`/categorias/todos`, setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (e) {
            toast.error(e, {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
    }

    useEffect(() => {
        getCategorias()
    }, [categorias.length])

    return (
        <>
            <Box height={175} component={Paper} elevation={4}>
                <Box height={100} display='flex' justifyContent='center' alignItems='center'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Pesquise aqui</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon color='primary' />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Pesquise aqui"
                        />
                    </FormControl>
                </Box>
                <Box height={75} display='flex' justifyContent='center' alignItems='center' gap='50px'>
                    {
                        categorias.map(categoria => (
                            <Button variant='contained'>{categoria.nome}</Button>
                        ))
                    }
                </Box>
            </Box >
        </>
    )
}

export default BarraPesquisa