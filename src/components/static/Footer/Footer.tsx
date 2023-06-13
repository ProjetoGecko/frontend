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
            <Grid container xs={12} className="footer_conteudo" position='static'>
                <Grid item xs={12} md={4} className="footer_contacts">
                    <img className="Slogan" src={Logo} alt="Logo" width="70px" height="70px" />
                    <Grid className="footer_contacts">
                        <Typography className="Slogan-texto">No Gecko, cada compra é um passo eckológico com o qual você deixa a sua pegada verde no mundo.</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} className="footer_social_midia">
                    <Box className="footer_social_midia">
                        <Typography color='#F6F4EB'>Fique por dentro de tudo!</Typography>
                        <Box className='socialmedias'>
                            <InstagramIcon className="redes" />
                            <GitHubIcon className="redes" />
                            <LinkedInIcon className="redes" />
                        </Box>
                        <Box className='socialmedias'>
                            <QuestionAnswerIcon className="contatos" />
                            <LocalPhoneIcon className="contatos" />
                            <EmailIcon className="contatos" />
                        </Box>
                    </Box>
                </Grid>


                <Grid item xs={12}  md={4} className="footer-inscrevase" display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                    <Box className="caixa_imputs_footer" marginBottom={1}>
                        <TextField color='primary' placeholder="Insira seu e-mail" InputProps={{ endAdornment: <MailIcon /> }} />
                    </Box>
                    <Typography>Você pode ajudar a salvar o mundo!</Typography>
                </Grid>
            </Grid>
            <Grid className="direitos" position='static'>
                <Link to="https://brazil.generation.org/" target="_blank">
                    <Typography color='#F6F4EB' variant="subtitle2" gutterBottom align="center">Apoio: https://brazil.generation.org/</Typography>
                </Link>
            </Grid>
        </>
    )
}

export default Footer