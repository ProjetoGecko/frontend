import React, { useState, useEffect, ChangeEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormControlLabel, FormLabel, FormHelperText, Radio, RadioGroup, Box, Grid, Card, CardHeader, CardContent, CardMedia } from "@mui/material";
import Produto from '../../../models/Produto'
import Categoria from '../../../models/Categoria'
import { busca, cadastro, atualizar } from '../../../services/Service';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import User from '../../../models/User';
import './CadastrarProduto.css'
import { toast } from 'react-toastify';

function CadastrarProduto() {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const idUser = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

    const [user, setUser] = useState<User>({
        id: +idUser,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    })

    useEffect(() => {
        if (idUser.length > 0) {
            busca(`/usuarios/${idUser}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })
        }
    }, [idUser])

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
        categoria: null,
        usuario: null
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
    }

    async function findByIdProduto(id: string) {
        await busca(`produtos/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {
        if (id !== undefined) {
            setProduto({
                ...produto,
                [e.target.name]: e.target.value,
                usuario: user
            })
        }
        else {
            setProduto({
                ...produto,
                [e.target.name]: e.target.value,
                categoria: categoria,
                usuario: user
            })
        }
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Produto atualizado com sucesso!', {
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
                alert(e)
            }
        } else {
            try {
                await cadastro(`/produtos`, produto, setProduto, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Produto Cadastrado com sucesso!', {
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
                alert(e)
            }
        }

        navigate('/listar_produtos')
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
                        <Typography variant="h4" color="primary" component="h1" align="center" mb={2}>{id !== undefined ? 'Atualizar anúncio' : 'Novo anúncio'}</Typography>
                        <TextField
                            value={produto.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)}
                            id="nome" label="Nome do produto" variant="outlined" name="nome" margin="normal" fullWidth />
                        <TextField
                            value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                        <TextField
                            value={produto.preco} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="preco" label="Preço" variant="outlined" name="preco" margin="normal" fullWidth />
                        <TextField
                            value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="Link para a foto" variant="outlined" name="foto" margin="normal" fullWidth />
                        <Box display='flex' justifyContent='space-evenly' paddingTop='5%'>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Estado</FormLabel>
                                <RadioGroup
                                    value={+produto.estado}
                                    onChange={(e) => setProduto({
                                        ...produto,
                                        estado: +e.target.value
                                    })}
                                    id="estado"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel name="estado" value="1" control={<Radio />} label="Novo" />
                                    <FormControlLabel name="estado" value="0" control={<Radio />} label="Usado" />
                                </RadioGroup>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Reciclável</FormLabel>
                                <RadioGroup
                                    value={+produto.reciclavel}
                                    onChange={(e) => setProduto({
                                        ...produto,
                                        reciclavel: +e.target.value
                                    })}
                                    id="reciclavel"
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel name='reciclavel' value='1' control={<Radio />} label="Sim" />
                                    <FormControlLabel name='reciclavel' value='0' control={<Radio />} label="Não" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box display='flex' justifyContent='space-evenly' alignItems='center' paddingTop='5%' paddingBottom='5%'>
                            <FormControl >
                                <InputLabel id="demo-simple-select-helper-label">Categoria</InputLabel>
                                <Select
                                    value={produto.categoria?.id !== undefined ? produto.categoria?.id : 1}
                                    sx={{ width: '15vw' }}
                                    onChange={(e) => busca(`/categorias/${e.target.value}`, setCategoria, {
                                        headers: {
                                            'Authorization': token
                                        }
                                    })}
                                    label='Categoria'>
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
                                {id !== undefined ? 'Atualizar' : 'Cadastrar'}
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
                    <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: 300, height: 650 }}>
                        <CardHeader
                            title={
                                produto.nome !== '' ? truncateString(produto.nome, 20) : "Nome"
                            }
                            subheader={user.nome + " - " + (produto.categoria?.nome !== '' ? produto.categoria?.nome : "Categoria")}
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