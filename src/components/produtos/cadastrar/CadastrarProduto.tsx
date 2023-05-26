import React, { useState, useEffect, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormControlLabel, FormLabel, FormHelperText, Radio, RadioGroup, Box } from "@material-ui/core";
import Produto from '../../../models/Produto'
import Categoria from '../../../models/Categoria'
import { busca, cadastro } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import './CadastrarProduto.css'

function CadastrarProduto() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
    })

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: "",
        descricao: "",
        preco: 0,
        estado: 0,
        reciclavel: 0,
        foto: "",
        curtidas: 0,
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id != undefined) {
            findByIdProduto(id)
        }
    }, [id])

    async function getCategorias() {

        await busca("/categorias/todos", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
        console.log("get categoria: ", categorias)
    }
    async function findByIdProduto(id: string) {
        await busca(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })
        console.log("Produto:", produto)
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('produto' + JSON.stringify(produto))

        if (id !== undefined) {
            // await put(`/produtos`, produto, setProduto, {
            //     headers: {
            //         'Authorization': token
            //     }
            // })
            alert('Produto atualizado com sucesso')
        } else {
            await cadastro(`/produtos`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Produto cadastrado com sucesso')
        }
        back()
    }

    function back() {
        navigate('/home')
    }


    return (
        <>
            <Container maxWidth="sm" className="principal">
                <form onSubmit={onSubmit}>
                    <Typography variant="h4" color="textSecondary" component="h1" align="center" >Formulário de cadastro Produto</Typography>
                    <TextField className="input1" value={produto.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="nome do produto" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField className="input1" value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <TextField className="input1" value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="preco" variant="outlined" name="preco" margin="normal" fullWidth />
                    <TextField className="input1" value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="foto" variant="outlined" name="foto" margin="normal" fullWidth />
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Estado</FormLabel>
                        <RadioGroup
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                            id="estado"
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel name="estado" value="1" control={<Radio />} label="Novo" />
                            <FormControlLabel name="estado" value="0" control={<Radio />} label="Usado" />
                        </RadioGroup>
                    </FormControl>
                    <Box>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Reciclavél</FormLabel>
                            <RadioGroup
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                                id="reciclavel"
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel name='reciclavel' value="1" control={<Radio />} label="Sim" />
                                <FormControlLabel name='reciclavel' value="0" control={<Radio />} label="Não" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e) => busca(`/categorias/${e.target.value}`, setCategoria, {
                                headers: {
                                    'Authorization': token
                                }
                            })}>
                            {
                                categorias.map(categoria => (
                                    <MenuItem value={categoria.id}>{categoria.nome}</MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText className="input3">Escolha uma Categoria para o produto</FormHelperText>
                        <Button type="submit" variant="contained" color="primary">
                            Cadastrar
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </>
    )
}

export default CadastrarProduto;