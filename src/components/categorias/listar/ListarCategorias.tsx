import React, { useEffect, useState } from "react"
import { Card, CardHeader, CardContent, Typography, Grid, Box, Button } from "@mui/material"
import { busca } from "../../../services/Service"
import Categoria from "../../../models/Categoria"
import { useSelector } from "react-redux"
import { UserState } from "../../../store/token/Reducer"
import { Link } from "react-router-dom";

function ListarCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

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

    categorias.sort((a, b) => b.id - a.id)

    function truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    return (
        <>
            <Grid container display='flex' justifyContent='start' alignItems='center' marginTop={8}>
                {
                    categorias.map(categorias => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} display='flex' justifyContent='center' alignItems='center' marginBottom={8}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: 250, height: 200 }}>
                                <CardHeader
                                    title={truncateString(categorias.nome, 20)}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary" height='5vh'>
                                        {truncateString(categorias.descricao, 150)}
                                    </Typography>
                                    <Box display='flex' justifyContent='space-between' alignItems='center' width='100%' style={{ marginTop: '1em' }}>
                                        <Link to={`/cadastrar_categoria/${categorias.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft" size='small' style={{ backgroundColor: '#bb872c', color: 'white' }} >
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarCategoria/${categorias.id}`} className="text-decorator-none">
                                            <Box className="input4" mx={1}>
                                                <Button variant="contained" size='small' style={{ backgroundColor: '#973838', color: 'white' }}>
                                                    deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
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