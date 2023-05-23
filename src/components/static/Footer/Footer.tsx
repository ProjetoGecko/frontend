import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'
import Logo from '../../../images/GeckoLogo.png';

function Footer() {

    return (
        <>
            <Grid container className="footer_conteudo">
                <Grid item xs={3} className="footer_contacts" >
                    <img src={Logo} alt="Logo" width="90px" margin-bottom="50px" />
                    <p className="Slogan">Na Gecko, cada compra é um passo eckológico com o qual você deixa a sua pegada verde no mundo.</p>

                    <Box display="flex" alignItems="center" justifyContent="left" className="footer_social_midia">
                        <InstagramIcon className="redes" />
                        <GitHubIcon className="redes" />
                        <LinkedInIcon className="redes" />
                    </Box>
                </Grid>
                <Grid>

                    <ul className="lista_footer">
                        <li>Endereço</li>
                        <li>Telefone</li>
                        <li>E-mail</li>
                    </ul>
                </Grid>
                <Grid item xs={4} className="footer_Inscrevase" >
                    <h3>Fique por dentro de tudo!</h3>
                    <p>VOCÊ PODE AJUDAR A SALVAR O MUNDO.</p>
                    <Box className="caixa_imputs_footer" mb={5}>
                        <input type="email" className="caixaemail" />
                        <button>
                            <i>Inscreva-se</i>
                        </button>
                    </Box>
                </Grid>
            </Grid>
            <Grid className="direitos">
                <a href="">
                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">https://brazil.generation.org/</Typography>
                </a>
            </Grid>
        </>
    )
}

export default Footer