import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <AppBar className='navbar' position="static">
                <Toolbar>
                    <Box mx={4}>
                        <Typography className='logonav'>
                            Gecko
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box>
                            <Link to="/">
                                <Typography className='menunav'>
                                    Início
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Typography className='menunav'>
                                /
                            </Typography>
                        </Box>
                        <Box>
                            <Link to="/sobre">
                                <Typography className='menunav'>
                                    Sobre
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Typography className='menunav'>
                                /
                            </Typography>
                        </Box>
                        <Box>
                            <Link to="/listar_produtos">
                                <Typography className='menunav'>
                                    Produtos
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Typography className='menunav'>
                                /
                            </Typography>
                        </Box>
                        <Box>
                            <Link to="/contato">
                                <Typography className='menunav'>
                                    Contato
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1}>
                            <Typography className='menunav'>
                                /
                            </Typography>
                        </Box>
                        <Box>
                            <Link to="#">
                                <Typography className='menunav'>
                                    Meu Carrinho
                                </Typography>
                            </Link>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;