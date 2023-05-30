import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid, Box } from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { atualizar, busca, cadastro } from '../../../services/Service'
import { useSelector } from 'react-redux'
import { UserState } from '../../../store/token/Reducer'

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
            alert("Você precisa estar logado.")

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
        console.log(categoria)
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria atualizada com sucesso')
            } catch (e) {
                alert(e)
            }
        } else {
            try {
                await cadastro(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria cadastrada com sucesso.')
            } catch (e) {
                alert(e)
            }
        }
        back()
    }

    function back() {
        navigate('/Listar_Categorias')
    }

    return (
        <Grid container minHeight='60vh' display='flex' justifyContent='center' alignItems='center'>
            <Grid item xs={4}>
                <form onSubmit={onSubmit}>
                    <Typography gutterBottom variant="h3" color="primary" component="h1" align="center" >Cadastrar Categoria</Typography>
                    <TextField value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <Box display='flex' gap='5%'>
                        <Button onClick={() => navigate(-1)} sx={{ marginTop: '16px' }} variant="contained" color="secondary" fullWidth>
                            Cancelar
                        </Button>
                        <Button sx={{ marginTop: '16px' }} type="submit" variant="contained" color="primary" fullWidth>
                            Cadastrar
                        </Button>
                    </Box>
                </form>
            </Grid>
        </Grid>

    )
}

export default CadastroCategoria