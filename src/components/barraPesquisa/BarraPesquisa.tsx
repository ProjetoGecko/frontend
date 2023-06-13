import { Box, Paper, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Typography } from "@mui/material"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import useLocalStorage from "react-use-localstorage"
import Categoria from "../../models/Categoria"
import { busca } from "../../services/Service"
import { UserState } from "../../store/token/Reducer"
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'

function BarraPesquisa() {
    const [searchString, setSearchString] = useLocalStorage('searchString')
    const [categoriaString, setCategoriaString] = useLocalStorage('categoriaString')

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
            })
        }
    }

    useEffect(() => {
        getCategorias()
    }, [categorias.length])

    return (
        <>
            <Box height={175} component={Paper} elevation={4} square display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Box height={100} display='flex' justifyContent='center' alignItems='center'>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Pesquise aqui</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton id='procurar'>
                                        <SearchIcon color='primary' />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Pesquise aqui"
                            onChange={(e) => {
                                setSearchString(e.target.value)
                            }}
                        />
                    </FormControl>
                </Box>
                <Box id='categorias-busca' height={75} display={{ xs: 'none', md: 'flex' }} justifyContent='center' alignItems='center' gap={{ md: 2, lg: 3 }}>
                    {
                        categorias.map(categoria => (
                            <Button
                                sx={{ height: '40px' }}
                                className='categorizar'
                                variant='contained'
                                onClick={(e) => {
                                    setCategoriaString(categoria.nome)
                                }}
                            >
                                <Typography variant="body2" overflow='visible'>{categoria.nome}</Typography>
                            </Button>
                        ))
                    }
                </Box>
                <Box height={60} display={{ xs: 'flex', md: 'none' }}>
                    <Link to="/cadastrar_produto">
                        <Button variant="contained">Cadastrar Produto</Button>
                    </Link>
                </Box>
            </Box >
        </>
    )
}

export default BarraPesquisa