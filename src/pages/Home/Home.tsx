import React from "react";
import { Grid, Box, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import './Home.css';
import Carousel from '../../components/carousel/Carousel';
import FloatingButton from "../../components/FloatingButton/FloatingButton";



function Home() {
  return (
    <>
      <Grid container my={5} direction="row" justifyContent="center" alignItems="center" className="caixahome" minHeight="100vh" >
        <Grid alignItems="center" item xs={12} md={6} px={6}>
          <Box>
            <Typography className="TituloHome" variant="h3" mb={8} align="center" color="primary">Seja bem vinde!</Typography>
            <Typography variant="body1" gutterBottom align="justify" color="secondary">Bem-vinde ao Gecko, um marketplace de compras conscientes, inspirado na ODS 12 - Consumo e Produção Responsáveis, da ONU. Aqui, você encontrará uma variedade de produtos sustentáveis, provenientes de marcas com práticas éticas. Além disso, no Gecko, você também pode vender produtos usados e sustentáveis, promovendo a economia circular e contribuindo para a redução do desperdício. Faça suas compras de forma consciente e junte-se a nós para transformar o mundo com escolhas responsáveis!</Typography>
          </Box>
          <Box display="flex" justifyContent="center" paddingTop={4}>
            <Link to='/listar_produtos'>
              <Button variant="outlined" className="botaodohome">Ver Produtos</Button>
            </Link>
          </Box>
        </Grid>
        <Grid item md={6} display={{ xs: 'none', md: 'block' }}>
          <img src="https://media.discordapp.net/attachments/1092433406610128916/1110208826294149231/5_posts_para_Twitter_anunciando_o_lancamento_de_um_novo_app_de_despertador_para_celulares_Acorda_com_estilo_Nosso_novo_app_de_despertador_para_celulares_acaba_de_ser_lancado._Baixe_agora_e_comece_seu_dia_com_o_pe_.png?width=666&height=472" alt="Imagem do lagarto Gecko com um carrinho de compras e um símbolo de reciclável." width="100%" />
        </Grid>
        <Box display={{ xs: 'none', md: 'block' }}>
          <Carousel />
        </Box>
      </Grid>
      <FloatingButton />
    </>
  );
}

export default Home;
