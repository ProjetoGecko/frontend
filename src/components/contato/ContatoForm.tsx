import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid, Box } from "@mui/material"
import { RiMailSendLine } from 'react-icons/ri'

function ContatoForm() {

    return (
        <Grid container my={5} maxWidth='100vw' minHeight='85vh' display='flex' justifyContent='center' alignItems='center'>
            <Grid item xs={6} >
                <form method='POST' action="https://getform.io/f/18d01646-0902-4333-8a36-8c1d05c63681">
                    <Typography gutterBottom variant="h3" color="primary" align="center" >Vamos conversar? 😊</Typography>
                    <TextField id="nome" label="Nome" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField id="email" label="E-mail" variant="outlined" name="email" margin="normal" fullWidth />
                    <TextField 
                    id="mensagem" 
                    label="Mensagem" 
                    variant="outlined" 
                    name="mensagem" 
                    margin="normal" 
                    fullWidth 
                    multiline
                    rows={4} />
                    <Box display='flex' gap='5%'>
                        <Button sx={{ marginTop: '16px' }} type="submit" variant="contained" color="primary" fullWidth>
                            Enviar <RiMailSendLine style={{ marginLeft: '1em' }} size={20} />
                        </Button>
                    </Box>
                </form>
            </Grid>
        </Grid>

    )
}

export default ContatoForm