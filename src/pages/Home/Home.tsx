import React from "react";
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import './Home.css';
import Carousel from '../../components/carousel/Carousel';



function Home() {
  return (
    <>
      <Carousel></Carousel>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="caixahome" minHeight="100vh" component={Paper}>
        <Grid alignItems="center" item xs={6} paddingLeft={9}>
          <Box>
            <Typography className="TituloHome" variant="h3" gutterBottom align="center" color="primary">Seja bem vinde!</Typography>
            <Typography variant="body1" gutterBottom align="justify" color="secondary">Somos uma e-commerce sustentável na qual usuários podem comprar e vender produtos novos, usados e recicláveis. Este projeto foi idealizado a partir do 12º Objetivo de Desenvolvimento Sustentável da ONU, que aborda o consumo e a produção responsáveis. Escolhemos o lagarto Gecko como representante deste tema devido ao fato do réptil conseguir sobreviver em locais inóspitos, apesar de estar ameaçado de extinção. Com isso, esperamos realizar um trabalho de conscientização e incentivar práticas comerciais que contribuem para um crescimento ecológico, a fim de preservar o nosso Planeta Terra.</Typography>
          </Box>
          <Box display="flex" justifyContent="center" paddingTop={2}>
            <Link to='/listar_produtos'>
              <Button variant="outlined" className="botaodohome">Ver Produtos</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src="https://media.discordapp.net/attachments/1092433406610128916/1110208826294149231/5_posts_para_Twitter_anunciando_o_lancamento_de_um_novo_app_de_despertador_para_celulares_Acorda_com_estilo_Nosso_novo_app_de_despertador_para_celulares_acaba_de_ser_lancado._Baixe_agora_e_comece_seu_dia_com_o_pe_.png?width=666&height=472" alt="Imagem do lagarto Gecko com um carrinho de compras e um símbolo de reciclável." width="100%" />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
