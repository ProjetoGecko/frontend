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
            <Grid container className="footer_conteudo">
                <Grid item xs={4} className="footer_contacts">
                    <img src={Logo} alt="Logo" width="90px" />
                    <Typography gutterBottom color='textSecondary' className="Slogan">Na Gecko, cada compra é um passo eckológico com o qual você deixa a sua pegada verde no mundo.</Typography>
                    <Box display="flex" alignItems="center" justifyContent="left" className="footer_social_midia">
                        <InstagramIcon className="redes" />
                        <GitHubIcon className="redes" />
                        <LinkedInIcon className="redes" />
                    </Box>
                </Grid>
                <Grid item xs={4} className="footer-redes">
                    <ul className="lista_footer">
                        <li><EmailIcon className="icones" />
                            <Typography color='textSecondary'>E-mail</Typography>
                        </li>
                        <li><LocalPhoneIcon className="icones" />
                            <Typography color='textSecondary'>Telefone</Typography>
                        </li>
                        <li><QuestionAnswerIcon className="icones" />
                            <Typography color='textSecondary'>Chat</Typography>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={4} className="footer-inscrevase" display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                    <Typography color='textSecondary'>Fique por dentro de tudo!</Typography>
                    <Typography color='textSecondary'>VOCÊ PODE AJUDAR A SALVAR O MUNDO.</Typography>
                    <Box className="caixa_imputs_footer">
                        <TextField color='primary' placeholder="Insira seu E-mail" InputProps={{ endAdornment: <MailIcon /> }} />
                    </Box>
                </Grid>
            </Grid>
            <Grid className="direitos">
                <Link to="https://brazil.generation.org/">
                    <Typography color='textSecondary' variant="subtitle2" gutterBottom align="center">https://brazil.generation.org/</Typography>
                </Link>
            </Grid>
        </>
    )
}

export default Footer