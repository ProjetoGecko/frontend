import React, { useEffect, useState } from "react"
import Produto from '../../../models/Produto'
import { Card, CardHeader, CardMedia, CardContent, Typography, Grid, Button, Box } from "@mui/material"
import { busca } from "../../../services/Service"
import { Link } from "react-router-dom"
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux"
import { UserState } from "../../../store/token/Reducer"

function ListarProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    async function getProdutos() {
        try {
            await busca("/produtos/todos", setProdutos, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    produtos.sort((a,b) => b.id - a.id)

    function truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }

    return (
        <>
            <Link to="/cadastrar_produto">
                <Button variant="contained">Cadastrar Produto</Button>
            </Link>

            <Grid container display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                {
                    produtos.map(produto => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} display='flex' justifyContent='center' alignItems='center' marginBottom={8}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: 300, height: 600 }}>
                                <CardHeader
                                    title={truncateString(produto.nome, 20)}
                                    subheader={produto.usuario?.nome + " - " + produto.categoria?.nome}
                                />
                                <CardMedia
                                    component="img"
                                    sx={{ width: 270, margin: 'auto', borderRadius: '10px' }}
                                    image={produto.foto}
                                />
                                <CardContent>
                                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                                        <Typography variant="h6" color="text.secondary">{"R$ " + produto.preco.toFixed(2).toString().replace('.', ',')}</Typography>
                                        <Box display='flex' alignItems='center' gap='10%'>
                                            {produto.curtidas !== null ? produto.curtidas : "0"}
                                            <FavoriteIcon />
                                        </Box>
                                    </Box>
                                    <br />
                                    <Typography variant="body2" color="text.secondary" height='10vh'>
                                        {truncateString(produto.descricao, 160)}
                                    </Typography>
                                    <br />
                                    <Box display='flex' justifyContent='space-around' alignItems='center' width='100%'>
                                        <Typography variant="body2" color="text.secondary">{+produto.estado == 1 ? "Novo" : "Usado"}</Typography>
                                        <hr />
                                        <Typography variant="body2" color="text.secondary">{+produto.reciclavel == 1 ? "Reciclável" : "Não reciclável"}</Typography>
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

export default ListarProdutos