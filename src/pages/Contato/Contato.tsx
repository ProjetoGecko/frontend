import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import './Contato.css'

function Contato() {

    return (
        <>
            <Grid id='contato' container style={{ gap: '10vh' }}>
                <Typography variant='h3'>Equipe</Typography>

                <Grid item container xs={12} style={{ gap: '10vh' }}>
                    <Grid item container className='contato-container'>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/111209237?v=4" alt="Foto Bruno" />
                                <Typography>Bruno Kauã</Typography>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/bruno-kaua-655a6922a/'>
                                        <LinkedInIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/brunokauaal'>
                                        <GitHubIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/108534306?v=4" alt="Foto Jeanine" />
                                <Typography>Jeanine Santiago</Typography>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/jeanine-santiago/'>
                                        <LinkedInIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/Jeanine19'>
                                        <GitHubIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/38157485?v=4" alt="Foto Júlia" />
                                <Typography>Julia Valerio</Typography>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/julia-valerio/'>
                                        <LinkedInIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/JuliaValerio'>
                                        <GitHubIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/60018504?v=4" alt="Foto Kaique" />
                                <Typography>Kaique Ferreira</Typography>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/kaiqueferreiras/'>
                                        <LinkedInIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/kaiqueferr'>
                                        <GitHubIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item container className='contato-container'>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/127215137?v=4" alt="Foto Ketelyn" />
                                <Typography>Ketelyn Medina</Typography>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/ketelynmedina/'>
                                        <LinkedInIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/KetelynMM'>
                                        <GitHubIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/126706460?v=4" alt="Foto Laís" />
                                <Typography>Laís Sales</Typography>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/lsalesxavier/'>
                                        <LinkedInIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/laiszz'>
                                        <GitHubIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/115517598?v=4" alt="Foto Letícia" />
                                <Typography>Letícia Oliveira</Typography>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/leticiaj/'>
                                        <LinkedInIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/leticiaoj'>
                                        <GitHubIcon style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Contato