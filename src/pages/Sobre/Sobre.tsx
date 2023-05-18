import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import './Sobre.css'

function Sobre() {

    return (
        <>
            <Grid container>
                <Typography>Sobre nós</Typography>

                <Grid item container xs={12}>
                    <Typography>Somos uma e-commerce sustentável na qual usuários podem comprar e vender produtos novos, usados e recicláveis. Este projeto foi idealizado a partir do 12º Objetivo de Desenvolvimento Sustentável da ONU, que aborda o consumo e a produção responsáveis. Escolhemos o Gecko como representante deste tema, devido ao fato do réptil conseguir sobreviver em locais inóspitos, apesar de estar ameaçado de extinção. Com isso, esperamos realizar um trabalho de conscientização e incentivar práticas comerciais que contribuem para um crescimento ecológico, a fim de preservar o nosso Planeta Terra.</Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Sobre
