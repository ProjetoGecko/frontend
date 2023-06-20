import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import './Contato.css'

function Contato() {
    return (
        <>
            <Grid id='contato' container>
                <Typography color='primary' variant='h2' className='contato-titulo'>Equipe</Typography>
                <Grid item container xs={12} style={{ gap: '80px' }}>
                    <Grid item container className='contato-container' flexDirection={{ xs: 'column', md: 'row' }}>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/111209237?v=4" alt="Foto Bruno" />
                                <Typography color='secondary' variant='h5' className='contato-nome'>Bruno Kauã</Typography>
                                <Box display='flex' style={{ gap: '15%' }}>
                                    <a href='https://www.linkedin.com/in/bruno-kaua-655a6922a/' target='_blank'>
                                        <LinkedInIcon className='contato-icon' />
                                    </a>
                                    <a href='https://github.com/brunokauaal' target='_blank'>
                                        <GitHubIcon className='contato-icon' />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/108534306?v=4" alt="Foto Jeanine" />
                                <Typography color='secondary' variant='h5' className='contato-nome'>Jeanine Santiago</Typography>
                                <Box display='flex' style={{ gap: '15%' }}>
                                    <a href='https://www.linkedin.com/in/jeanine-santiago/' target='_blank'>
                                        <LinkedInIcon className='contato-icon' />
                                    </a>
                                    <a href='https://github.com/Jeanine19' target='_blank'>
                                        <GitHubIcon className='contato-icon' />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/38157485?v=4" alt="Foto Júlia" />
                                <Typography color='secondary' variant='h5' className='contato-nome'>Julia Valerio</Typography>
                                <Box display='flex' style={{ gap: '15%' }}>
                                    <a href='https://www.linkedin.com/in/julia-valerio/' target='_blank'>
                                        <LinkedInIcon className='contato-icon' />
                                    </a>
                                    <a href='https://github.com/JuliaValerio' target='_blank'>
                                        <GitHubIcon className='contato-icon' />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/60018504?v=4" alt="Foto Kaique" />
                                <Typography color='secondary' variant='h5' className='contato-nome'>Kaique Ferreira</Typography>
                                <Box display='flex' style={{ gap: '15%' }}>
                                    <a href='https://www.linkedin.com/in/kaiqueferreiras/' target='_blank'>
                                        <LinkedInIcon className='contato-icon' />
                                    </a>
                                    <a href='https://github.com/kaiqueferr' target='_blank'>
                                        <GitHubIcon className='contato-icon' />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid item container className='contato-container'>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/127215137?v=4" alt="Foto Ketelyn" />
                                <Typography color='secondary' variant='h5' className='contato-nome'>Ketelyn Medina</Typography>
                                <Box display='flex' style={{ gap: '15%' }}>
                                    <a href='https://www.linkedin.com/in/ketelynmedina/' target='_blank'>
                                        <LinkedInIcon className='contato-icon' />
                                    </a>
                                    <a href='https://github.com/KetelynMM' target='_blank'>
                                        <GitHubIcon className='contato-icon' />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/126706460?v=4" alt="Foto Laís" />
                                <Typography color='secondary' variant='h5' className='contato-nome'>Laís Sales</Typography>
                                <Box display='flex' style={{ gap: '15%' }}>
                                    <a href='https://www.linkedin.com/in/lsalesxavier/' target='_blank'>
                                        <LinkedInIcon className='contato-icon' />
                                    </a>
                                    <a href='https://github.com/laiszz' target='_blank'>
                                        <GitHubIcon className='contato-icon' />
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box className='contato-cards'>
                                <img src="https://avatars.githubusercontent.com/u/115517598?v=4" alt="Foto Letícia" />
                                <Typography color='secondary' variant='h5' className='contato-nome'>Letícia Oliveira</Typography>
                                <Box display='flex' style={{ gap: '15%' }}>
                                    <a href='https://www.linkedin.com/in/leticiaj/' target='_blank'>
                                        <LinkedInIcon className='contato-icon' />
                                    </a>
                                    <a href='https://github.com/leticiaoj' target='_blank'>
                                        <GitHubIcon className='contato-icon' />
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