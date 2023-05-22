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
            <Grid container style={{ backgroundColor: "#283E30" }} className="footer_content">
                <Grid item xs={4} className="footer_contacts" style={{ color: "white" }}>
                    <img src={Logo} alt="Logo" width="90px" margin-bottom="50px"/>
                    <p className="Slogan">Na Gecko, cada compra é um passo eckológico que permite que você deixe a sua pegada verde no mundo.</p>

                    <Box display="flex" alignItems="center" justifyContent="left" className="footer_social_media">
                        <InstagramIcon className="redes" style={{ fontSize: 60, color: "White", height: "45px" }} />
                        <GitHubIcon className="redes" style={{ fontSize: 60, color: "white", height: "45px" }} />
                        <LinkedInIcon className="redes" style={{ fontSize: 60, color: "white", height: "45px" }} />
                    </Box>
                </Grid>
                <Grid item xs={6} className="footer_subscribe" style={{ color: "white" }} >
                    <h3>Fique por dentro de tudo!</h3>
                    <p>VOCÊ PODE AJUDAR A SALVAR O MUNDO.</p>
                    <Box className="input_group">
                        <input type="email" className="caixaemail" />
                        <button>
                            <i>Inscreva-se</i>
                        </button>
                    </Box>
                </Grid>
            </Grid>
            <Grid style={{ backgroundColor: "#213428" }} className="copy">
                <a href="">
                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">https://brazil.generation.org/</Typography>
                </a>
            </Grid>
        </>
    )
}

export default Footer