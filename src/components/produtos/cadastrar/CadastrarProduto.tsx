import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormControlLabel, FormLabel, FormHelperText, Radio, RadioGroup, Box, Grid, Card, CardHeader, CardContent, CardMedia } from "@mui/material";
import Produto from '../../../models/Produto'
import Categoria from '../../../models/Categoria'
import { busca, cadastro } from '../../../services/Service';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './CadastrarProduto.css'
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';

function CadastrarProduto() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

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
        reciclavel: 1,
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
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            // await put(`/produtos`, produto, setProduto, {
            //     headers: {
            //         'Authorization': token
            //     }
            // })
            // alert('Produto atualizado com sucesso')
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

    function truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    return (
        <>
            <Grid container display='flex' justifyContent='space-evenly' alignItems='center' marginY={10}>
                <Grid item xs={4}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h4" color="primary" component="h1" align="center" mb={2}>Novo anúncio</Typography>
                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="nome" label="Nome do produto" variant="outlined" name="nome" margin="normal" fullWidth />
                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço" variant="outlined" name="preco" margin="normal" fullWidth type='number' />
                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="Link para a foto" variant="outlined" name="foto" margin="normal" fullWidth />
                        <Box display='flex' justifyContent='space-evenly' paddingTop='5%'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Estado</FormLabel>
                                <RadioGroup
                                    onChange={(e) => setProduto({
                                        ...produto,
                                        estado: +e.target.value
                                    })}
                                    id="estado"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    defaultValue="0"
                                >
                                    <FormControlLabel name="estado" value="1" control={<Radio />} label="Novo" />
                                    <FormControlLabel name="estado" value="0" control={<Radio />} label="Usado" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Reciclável</FormLabel>
                                <RadioGroup
                                    onChange={(e) => setProduto({
                                        ...produto,
                                        reciclavel: +e.target.value
                                    })}
                                    id="reciclavel"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    defaultValue="1"
                                >
                                    <FormControlLabel name='reciclavel' value="1" control={<Radio />} label="Sim" />
                                    <FormControlLabel name='reciclavel' value="0" control={<Radio />} label="Não" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box display='flex' justifyContent='space-evenly' alignItems='center' paddingTop='5%' paddingBottom='5%'>
                            <FormControl >
                                <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                                <Select
                                    sx={{ width: '15vw' }}
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
                            </FormControl>
                            <Link to="/cadastrar_categoria">
                                <Button variant="text">Cadastrar Nova Categoria</Button>
                            </Link>
                        </Box>
                        <Box display='flex' gap='5%'>
                            <Button onClick={() => navigate(-1)} color='secondary' variant="contained" fullWidth>
                                Cancelar
                            </Button>
                            <Button type="submit" variant="contained" fullWidth>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item xs={5} display='flex' justifyContent='center' sx={{
                    width: '100%',
                    backgroundImage: 'url(https://img.lovepik.com/58pic/32/52/01/158PIC258PICCck69k6b7992d_PIC2018.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    backgroundPosition: '0.5vw',
                }}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: 300, height: 550 }}>
                        <CardHeader
                            title={
                                produto.nome !== '' ? truncateString(produto.nome, 20) : "Nome"
                            }
                            subheader={produto.usuario?.nome + " - " + (produto.categoria?.nome !== '' ? produto.categoria?.nome : "Categoria")}
                        />
                        <CardMedia
                            component="img"
                            height="200"
                            image={produto.foto}
                        />
                        <CardContent>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Typography variant="h6" color="text.secondary">
                                    {produto.preco !== 0 ? ("R$ " + (+produto.preco).toFixed(2).toString().replace('.', ',')) : "R$ 0.00"}
                                </Typography>
                                <Box display='flex' alignItems='center' gap='10%'>
                                    <Typography>
                                        {produto.curtidas !== null ? produto.curtidas : "0"}
                                    </Typography>
                                    <FavoriteIcon />
                                </Box>
                            </Box>
                            <br />
                            <Typography variant="body2" color="text.secondary" height='10vh' sx={{ overflow: 'hidden', wordWrap: 'break-word' }}>
                                {produto.descricao !== '' ? truncateString(produto.descricao, 100) : "Descrição"}
                            </Typography>
                            <br />
                            <Box display='flex' justifyContent='space-around' alignItems='center' width='100%'>
                                <Typography variant="body2" color="text.secondary">{+produto.estado == 1 ? "Novo" : "Usado"}</Typography>
                                <hr />
                                <Typography variant="body2" color="text.secondary">{+produto.reciclavel == 1 ? "Reciclável" : "Não reciclável"}</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid >
        </>
    )
}

export default CadastrarProduto;