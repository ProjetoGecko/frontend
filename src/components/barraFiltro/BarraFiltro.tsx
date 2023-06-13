import {  Paper, Button, Typography, FormControl, FormLabel, FormGroup, FormControlLabel, Switch, RadioGroup, Radio, Box } from "@mui/material"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useLocalStorage from "react-use-localstorage"

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

export default BarraFiltro