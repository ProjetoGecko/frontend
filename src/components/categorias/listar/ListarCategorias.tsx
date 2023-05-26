import React, { useEffect, useState } from "react"
import Produto from '../../../models/Produto'
import useLocalStorage from "react-use-localstorage"
import { Card, CardHeader, CardMedia, CardContent, Typography, Divider, Grid, Button, Box } from "@mui/material"
import { busca } from "../../../services/Service"
import { Link } from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Categoria from "../../../models/Categoria"

function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [token, setToken] = useLocalStorage('token')

    async function getCategorias() {
        try {
            await busca("/categorias/todos", setCategorias, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        getCategorias()
    }, [categorias.length])

    function truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    return (
        <>

            <Grid container display='flex' justifyContent='start' alignItems='center'  marginTop={8}>
                {
                    categorias.map(categorias => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} display='flex' justifyContent='center' alignItems='center' marginBottom={8}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: 250, height: 150 }}>
                                <CardHeader
                                    title={truncateString(categorias.nome, 20)}

                                />
                                <CardContent>

                                    
                                    <Typography variant="body2" color="text.secondary" height='10vh'>
                                        {truncateString(categorias.descricao, 150)}
                                    </Typography>
                                  
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    )
}

export default ListarCategorias