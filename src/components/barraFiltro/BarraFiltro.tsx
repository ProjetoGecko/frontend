import React from 'react'
import { Box, FormControl, FormControlLabel, FormGroup, FormLabel, Paper, Radio, RadioGroup, Switch, Typography } from '@mui/material'
import './BarraFiltro.css'

function BarraFiltro() {
    return (
        <>
            <Box component={Paper} width='300px' height='auto' elevation={4} py={5} pl={6} display='flex' flexDirection='column' justifyContent='center' alignItems='start' gap={4}>
                <Typography variant='h3' color='textPrimary'>Filtros</Typography>
                <FormControl component="fieldset" variant="standard">
                    <FormLabel color='secondary' component="legend" sx={{paddingBottom: '10px'}}>Produtos</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            color='secondary'
                            control={
                                <Switch name="gecko" />
                            }
                            label="Gecko™"
                        />
                        <FormControlLabel
                            control={
                                <Switch name="usados" />
                            }
                            label="Usados"
                        />
                        <FormControlLabel
                            color='secondary'
                            control={
                                <Switch name="reciclaveis" />
                            }
                            label="Recicláveis"
                        />
                    </FormGroup>
                </FormControl>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label" sx={{paddingBottom: '10px'}}>Preço</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Até R$50,00" />
                        <FormControlLabel value="male" control={<Radio />} label="R$50,00 - R$200,00" />
                        <FormControlLabel value="other" control={<Radio />} label="Acima de R$200,00" />
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    )
}

export default BarraFiltro