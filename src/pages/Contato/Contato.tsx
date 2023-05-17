import React from 'react'
import { Box, Grid } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import './Contato.css'

function Contato() {

    return (
        <>
            <Grid id='contato' container style={{ gap: '10vh' }}>
                <p className='contato-titulo'>Equipe</p>

                <Grid item container xs={12} style={{ gap: '10vh' }}>
                    <Grid item container className='contato-container'>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/111209237?v=4" alt="Foto Bruno" />
                                <p className='contato-nome'>Bruno Kauã</p>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/bruno-kaua-655a6922a/'>
                                        <LinkedInIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/brunokauaal'>
                                        <GitHubIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/108534306?v=4" alt="Foto Jeanine" />
                                <p className='contato-nome'>Jeanine Santiago</p>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/jeanine-santiago/'>
                                        <LinkedInIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/Jeanine19'>
                                        <GitHubIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/38157485?v=4" alt="Foto Júlia" />
                                <p className='contato-nome'>Julia Valerio</p>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/julia-valerio/'>
                                        <LinkedInIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/JuliaValerio'>
                                        <GitHubIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/60018504?v=4" alt="Foto Kaique" />
                                <p className='contato-nome'>Kaique Ferreira</p>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/kaiqueferreiras/'>
                                        <LinkedInIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/kaiqueferr'>
                                        <GitHubIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item container className='contato-container'>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/127215137?v=4" alt="Foto Ketelyn" />
                                <p className='contato-nome'>Ketelyn Medina</p>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/ketelynmedina/'>
                                        <LinkedInIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/KetelynMM'>
                                        <GitHubIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/126706460?v=4" alt="Foto Laís" />
                                <p className='contato-nome'>Laís Sales</p>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/lsalesxavier/'>
                                        <LinkedInIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/laiszz'>
                                        <GitHubIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/115517598?v=4" alt="Foto Letícia" />
                                <p className='contato-nome'>Letícia Oliveira</p>
                                <Box display='flex' style={{ gap: '20%' }}>
                                    <a href='https://www.linkedin.com/in/leticiaj/'>
                                        <LinkedInIcon className='contato-icon' style={{ fontSize: '5vh' }} />
                                    </a>
                                    <a href='https://github.com/leticiaoj'>
                                        <GitHubIcon className='contato-icon' style={{ fontSize: '5vh' }} />
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