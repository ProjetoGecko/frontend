import React from "react"
import { Grid, Box, Typography, Button } from "@mui/material"
import './Home.css';
import { Link } from "react-router-dom";




function Home() {

    return (

        <>
            <>
                <Grid container direction="row" justifyContent="center" alignItems="center" className="caixahome" >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulohome" >Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center"  className="titulohome">Somos uma e-commerce sustentável na qual usuários podem comprar e vender produtos novos, usados e recicláveis. Este projeto foi idealizado a partir do 12º Objetivo de Desenvolvimento Sustentável da ONU, que aborda o consumo e a produção responsáveis. Escolhemos o lagarto Gecko como representante deste tema devido ao fato do réptil conseguir sobreviver em locais inóspitos, apesar de estar ameaçado de extinção. Com isso, esperamos realizar um trabalho de conscientização e incentivar práticas comerciais que contribuem para um crescimento ecológico, a fim de preservar o nosso Planeta Terra.</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Link  to='/produtos'>
                        <Button variant="outlined" className="botaodohome">Ver Produtos</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://media.discordapp.net/attachments/1092433406610128916/1110208826294149231/5_posts_para_Twitter_anunciando_o_lancamento_de_um_novo_app_de_despertador_para_celulares_Acorda_com_estilo_Nosso_novo_app_de_despertador_para_celulares_acaba_de_ser_lancado._Baixe_agora_e_comece_seu_dia_com_o_pe_.png?width=666&height=472" alt="" width="100%"  />
                </Grid>
                <Grid xs={12} className="produtos">
                   <h1>OI</h1>
                </Grid>
            </Grid> 
            </>

        </>


    );


}


export default Home;