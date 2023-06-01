import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid, Box, FormHelperText } from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { atualizar, busca, cadastro } from '../../../services/Service'
import { useSelector } from 'react-redux'
import { UserState } from '../../../store/token/Reducer'
import { toast } from 'react-toastify'

function CadastroCategoria() {
    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            toast.error('Usuário não autenticado!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });

            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        busca(`/categorias/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value,
        })
    }

    let nome_valido = false
    let descricao_valido = false

    if (categoria.nome == '' || (categoria.nome.length > 5 && categoria.nome.length < 255)) {
        nome_valido = true
    }
    if (categoria.descricao == '' || (categoria.descricao.length > 5 && categoria.descricao.length < 255)) {
        descricao_valido = true
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            if (nome_valido && descricao_valido) {
                try {
                    await atualizar(`/categorias`, categoria, setCategoria, {
                        headers: {
                            'Authorization': token
                        }
                    })
                    toast.success('Categoria atualizada com sucesso', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        theme: 'colored',
                        progress: undefined,
                    });
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
                navigate('/Listar_Categorias')
            }
        } else {
            if (nome_valido && descricao_valido) {
                try {
                    await cadastro(`/categorias`, categoria, setCategoria, {
                        headers: {
                            'Authorization': token
                        }
                    })
                    toast.success('Categoria cadastrada com sucesso.', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        theme: 'colored',
                        progress: undefined,
                    });
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
                navigate('/Listar_Categorias')
            }
        }
    }

    return (
        <Grid container minHeight='60vh' display='flex' justifyContent='center' alignItems='center'>
            <Grid item xs={4}>
                <form onSubmit={onSubmit}>
                    <Typography gutterBottom variant="h3" color="primary" component="h1" align="center" >{id !== undefined ? 'Atualizar categoria' : 'Cadastrar categoria'}</Typography>
                    <TextField
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
                        id="nome"
                        label="Nome"
                        variant="outlined"
                        name="nome"
                        margin="normal"
                        fullWidth
                        required />
                    {nome_valido ? '' : <FormHelperText error>* Nome muito curto ou muito longo!</FormHelperText>}
                    <TextField
                        value={categoria.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)}
                        id="descricao"
                        label="Descrição"
                        variant="outlined"
                        name="descricao"
                        margin="normal"
                        fullWidth
                        required />
                    {descricao_valido ? '' : <FormHelperText error>* Descrição muito curta ou muito longa!</FormHelperText>}
                    <Box display='flex' gap='5%'>
                        <Button onClick={() => navigate(-1)} sx={{ marginTop: '16px' }} variant="contained" color="secondary" fullWidth>
                            Cancelar
                        </Button>
                        <Button sx={{ marginTop: '16px' }} type="submit" variant="contained" color="primary" fullWidth>
                            {id !== undefined ? 'Atualizar' : 'Cadastrar'}
                        </Button>
                    </Box>
                </form>
            </Grid>
        </Grid>

    )
}

export default CadastroCategoria