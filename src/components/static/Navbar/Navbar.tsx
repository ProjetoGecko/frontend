import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import './Navbar.css'


function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='logo'>
                        <Typography variant="h5">
                            Gecko
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className='nav'>
                            <Typography variant="h6">
                                Inicio
                            </Typography>
                        </Box>
                        <Box mx={1} className='nav'>
                            <Typography variant="h6">
                                Sobre
                            </Typography>
                        </Box>
                        <Box mx={1} className='nav'>
                            <Typography variant="h6">
                                Produtos
                            </Typography>
                        </Box>
                        <Box mx={1} className='nav'>
                            <Typography variant="h6">
                                Contato
                            </Typography>
                        </Box>
                        <Box mx={1} className='nav'>
                            <Typography variant="h6">
                                Meu Carrinho
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;