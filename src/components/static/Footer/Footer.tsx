import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import './Footer.css'

function Footer() {

    return (
        <>
            <Grid container style={{ backgroundColor: "#171717" }} className="footer_content">
                <Grid item xs={4} className="footer_contacts" style={{ color: "white" }}>
                    <h1>Logo</h1>
                    <p>Frase motivacional.</p>

                    <Box display="flex" alignItems="center" justifyContent="left" className="footer_social_media">
                        <InstagramIcon className="redes" style={{ fontSize: 60, color: "White" }} />
                        <GitHubIcon className="redes" style={{ fontSize: 60, color: "white" }} />
                        <LinkedInIcon className="redes" style={{ fontSize: 60, color: "white" }} />
                    </Box>
                </Grid>
                <Grid item xs={6} className="footer_subscribe" style={{ color: "white" }} >
                    <h3>Fique por dentro de tudo!</h3>
                    <p>VOCE PODE AJUDAR A SALVAR O MUNDO</p>
                    <Box className="input_group">
                        <input type="email" className="caixaemail" />
                        <button>
                            <i>CLick</i>
                        </button>
                    </Box>
                </Grid>
            </Grid>
            <Grid style={{ backgroundColor: "#0e0c0c" }} className="copy">
                <a href="">
                    <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">https://brazil.generation.org/</Typography>
                </a>
            </Grid>
        </>
    )
}

export default Footer