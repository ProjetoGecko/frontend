import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography, Grid, Box, TextField } from '@mui/material';
import Logo from '../../../images/GeckoLogo.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container xs={12} className="footer_conteudo">
                <Grid item xs={4} className="footer_contacts">
                    <img src={Logo} alt="Logo" width="80px" height="80px"/>
                    <Grid className="footer_contacts">
                        <Typography className="Slogan">Na Gecko, cada compra é um passo eckológico com o qual você deixa a sua pegada verde no mundo.</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4} className="footer-redes">
                    <ul className="lista_footer">
                        <li className="textoicones" >
                            <EmailIcon className="icones" />
                            <Typography>E-mail</Typography>
                        </li>
                        <li className="textoicones">
                            <LocalPhoneIcon className="icones" />
                            <Typography>Telefone</Typography>
                        </li>
                        <li className="textoicones">
                            <QuestionAnswerIcon className="icones" />
                            <Typography>Chat</Typography>
                        </li>
                    </ul>

                </Grid>
                <Grid item xs={4} className="footer-inscrevase" display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                    <Grid>
                        <Box display="flex" alignItems="stretch" justifyContent="star" className="footer_social_midia">
                            <InstagramIcon className="redes" />
                            <GitHubIcon className="redes" />
                            <LinkedInIcon className="redes" />
                        </Box>
                    </Grid>
                    <Typography>Fique por dentro de tudo!</Typography>
                    <Box className="caixa_imputs_footer">
                        <TextField color='primary' placeholder="Insira seu E-mail" InputProps={{ endAdornment: <MailIcon /> }} />
                    </Box>
                    <Typography>VOCÊ PODE AJUDAR A SALVAR O MUNDO.</Typography>
                </Grid>
            </Grid>
            <Grid className="direitos">
                <Link to="https://brazil.generation.org/" target="_blank">
                    <Typography color='textSecondary' variant="subtitle2" gutterBottom align="center">https://brazil.generation.org/</Typography>
                </Link>
            </Grid>
        </>
    )
}

export default Footer