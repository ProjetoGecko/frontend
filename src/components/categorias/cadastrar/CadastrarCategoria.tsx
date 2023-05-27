import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid } from "@mui/material"
import { useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { busca, cadastro } from '../../../services/Service'
import useLocalStorage from 'react-use-localstorage'

function CadastroCategoria() {
    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const [token, setToken] = useLocalStorage('token');

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
    })

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")

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
            // try {
            //     await put(`/categorias`, categoria, setCategoria, {
            //         headers: {
            //             'Authorization': token
            //         }
            //     })
            //     alert('Categoria atualizado com sucesso')
            // } catch (e) {
            //     alert(e)
            // }
        } else {
            try {
                await cadastro(`/categorias`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria cadastrado com sucesso')
            } catch (e) {
                alert(e)
            }
        }
        back()
    }

    function back() {
        navigate('/Categorias')
    }

    return (
        <Grid container minHeight='60vh' display='flex' justifyContent='center' alignItems='center'>
            <Grid item xs={4}>
                <form onSubmit={onSubmit}>
                    <Typography gutterBottom variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar Categoria</Typography>
                    <TextField value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField value={categoria.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <Button sx={{ marginTop: '16px' }} type="submit" variant="contained" color="primary" fullWidth>
                        Cadastrar
                    </Button>
                </form>
            </Grid>
        </Grid>

    )
}

export default CadastroCategoria