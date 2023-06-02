import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Radio, RadioGroup, Switch, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Produto from '../../models/Produto'
import Categoria from '../../models/Categoria'
import { busca } from '../../services/Service'
import { UserState } from '../../store/token/Reducer'
import SearchIcon from '@mui/icons-material/Search'
import TabProdutos from '../../components/tabProdutos/TabProdutos'
import useLocalStorage from 'react-use-localstorage'

function BarraFiltro() {
    const [filterNumber, setFilterNumber] = useLocalStorage('filterNumber')
    const [precoMin, setPrecoMin] = useLocalStorage('precoMin')
    const [precoMax, setPrecoMax] = useLocalStorage('precoMax')

    const [todosChecked, setTodosChecked] = useState(true)
    const [geckoChecked, setGeckoChecked] = useState(false)
    const [usadosChecked, setUsadosChecked] = useState(false)
    const [reciclaveisChecked, setReciclaveisChecked] = useState(false)
    const [precoChecked, setPrecoChecked] = useState('0')

    const filterArray = [+todosChecked, +geckoChecked, +usadosChecked, +reciclaveisChecked]

    useEffect(() => {
        if (geckoChecked || usadosChecked || reciclaveisChecked) {
            setTodosChecked(false)
        } else {
            setTodosChecked(true)
            setFilterNumber('0')
        }

        const filterString = filterArray.join('')

        if (filterString === '1000') {
            setFilterNumber('0')
        } else if (filterString === '0100') {
            setFilterNumber('1')
        } else if (filterString === '0110') {
            setFilterNumber('2')
        } else if (filterString === '0101') {
            setFilterNumber('3')
        } else if (filterString === '0111') {
            setFilterNumber('4')
        } else if (filterString === '0010') {
            setFilterNumber('5')
        } else if (filterString === '0011') {
            setFilterNumber('6')
        } else if (filterString === '0001') {
            setFilterNumber('7')
        }
    }, [filterArray])

    useEffect(() => {
        if (precoChecked == '0') {
            setPrecoMin('0')
            setPrecoMax('999999')
        } else if (precoChecked == '50') {
            setPrecoMin('0')
            setPrecoMax('50')
        } else if (precoChecked == '50-200') {
            setPrecoMin('50')
            setPrecoMax('200')
        } else if (precoChecked == '200') {
            setPrecoMin('200')
            setPrecoMax('999999')
        }
    }, [precoChecked])

    return (
        <>
            <Box component={Paper} elevation={4} py={5} pl={6} height='100%' display='flex' flexDirection='column' justifyContent='start' alignItems='start' gap={4} square>
                <Link to="/cadastrar_produto">
                    <Button variant="contained">Cadastrar Produto</Button>
                </Link>
                <Typography variant='h3' color='textPrimary'>Filtros</Typography>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel color='secondary' component="legend" sx={{ paddingBottom: '10px' }}>Produtos</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            color='secondary'
                            control={
                                <Switch
                                    checked={todosChecked}
                                    name="0"
                                    onChange={() => {
                                        setTodosChecked(!todosChecked)

                                        if (todosChecked) {
                                            filterArray[0] = 1
                                        } else {
                                            filterArray[0] = 0
                                        }
                                    }}
                                />
                            }
                            label="Todos"
                        />
                        <FormControlLabel
                            color='secondary'
                            control={
                                <Switch
                                    checked={geckoChecked}
                                    name="1"
                                    onChange={() => {
                                        setGeckoChecked(!geckoChecked)

                                        if (todosChecked) {
                                            filterArray[1] = 1
                                        } else {
                                            filterArray[1] = 0
                                        }
                                    }}
                                />
                            }
                            label="Gecko™"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={usadosChecked}
                                    name="2"
                                    onChange={() => {
                                        setUsadosChecked(!usadosChecked)

                                        if (todosChecked) {
                                            filterArray[2] = 1
                                        } else {
                                            filterArray[2] = 0
                                        }
                                    }}
                                />
                            }
                            label="Usados"
                        />
                        <FormControlLabel
                            color='secondary'
                            control={
                                <Switch
                                    checked={reciclaveisChecked}
                                    name="3"
                                    onChange={() => {
                                        setReciclaveisChecked(!reciclaveisChecked)

                                        if (todosChecked) {
                                            filterArray[3] = 1
                                        } else {
                                            filterArray[3] = 0
                                        }
                                    }}
                                />
                            }
                            label="Recicláveis"
                        />
                    </FormGroup>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{ paddingBottom: '10px' }}>Preço</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="0"
                        name="radio-buttons-group"
                        onChange={(e) => {
                            setPrecoChecked(e.target.value)
                        }}
                    >
                        <FormControlLabel
                            value="0"
                            control={<Radio />}
                            label="Todos"
                        />
                        <FormControlLabel
                            value="50"
                            control={<Radio />}
                            label="Até R$50,00"
                        />
                        <FormControlLabel
                            value="50-200"
                            control={<Radio />}
                            label="R$50,00 - R$200,00"
                        />
                        <FormControlLabel
                            value="200"
                            control={<Radio />}
                            label="Acima de R$200,00"
                        />
                    </RadioGroup>
                </FormControl>
                <Button id='aplicar' variant='contained' sx={{ width: '190px' }}>Aplicar Filtros</Button>
            </Box>
        </>
    )
}

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
            <Box height={175} component={Paper} elevation={4} square>
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
                <Box height={75} display='flex' justifyContent='center' alignItems='center' gap='50px'>
                    {
                        categorias.map(categoria => (
                            <Button
                                className='categorizar'
                                variant='contained'
                                onClick={(e) => {
                                    setCategoriaString(categoria.nome)
                                }}
                            >
                                {categoria.nome}
                            </Button>
                        ))
                    }
                </Box>
            </Box >
        </>
    )
}

function ListarProdutos({ filter, preco, search, categoria }: { filter: string, preco: string[], search: string, categoria: string }) {
    const [produtos, setProdutos] = useState<Produto[]>([])

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const idUser = useSelector<UserState, UserState['id']>(
        (state) => state.id
    )

    async function getProdutos() {
        try {
            await busca("/produtos/todos", setProdutos, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    produtos.sort((a, b) => b.id - a.id)

    switch (+filter) {
        case 0: {
            return (
                <Grid container item xs={10} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 1: {
            return (
                <Grid container item xs={10} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.categoria?.nome == 'Produtos Gecko')
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 2: {
            return (
                <Grid container item xs={10} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.categoria?.nome == 'Produtos Gecko' && produto.estado == 0)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 3: {
            return (
                <Grid container item xs={10} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.categoria?.nome == 'Produtos Gecko' && produto.reciclavel == 1)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 4: {
            return (
                <Grid container item xs={10} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.categoria?.nome == 'Produtos Gecko' && produto.estado == 0 && produto.reciclavel == 1)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 5: {
            return (
                <Grid container item xs={10} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.estado == 0)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 6: {
            return (
                <Grid container item xs={10} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.estado == 0 && produto.reciclavel == 1)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 7: {
            return (
                <Grid container item xs={10} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.reciclavel == 1)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto)
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        default: {
            return (
                <>
                </>
            )
        }
    }
}

function Produtos() {
    const [filterNumber, setFilterNumber] = useLocalStorage('filterNumber')
    const [precoMin, setPrecoMin] = useLocalStorage('precoMin')
    const [precoMax, setPrecoMax] = useLocalStorage('precoMax')
    const [searchString, setSearchString] = useLocalStorage('searchString')
    const [categoriaString, setCategoriaString] = useLocalStorage('categoriaString')

    if (document.getElementById('aplicar') != undefined) {
        document.getElementById('aplicar')!.onclick = function () {
            setFilterNumber(filterNumber.concat(' '))
        };
    }
    if (document.getElementById('procurar') != undefined) {
        document.getElementById('procurar')!.onclick = function () {
            setFilterNumber(filterNumber.concat(' '))
        };
    }
    for (let i = 0; i < document.getElementsByClassName('categorizar').length; i++) {
        let element: HTMLElement = document.getElementsByClassName('categorizar')[i] as HTMLElement
        if (element != undefined) {
            element.onclick = function () {
                setFilterNumber(filterNumber.concat(' '))
            };
        }
    }

    const precoRange = [precoMin, precoMax]

    return (
        <>
            <BarraPesquisa />
            <Grid container>
                <Grid item xs={2} py={8}>
                    <BarraFiltro />
                </Grid>
                <ListarProdutos filter={filterNumber} preco={precoRange} search={searchString} categoria={categoriaString} />
            </Grid>
        </>
    )
}

localStorage.clear()

export default Produtos