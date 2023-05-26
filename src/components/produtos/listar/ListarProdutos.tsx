import React, { useEffect, useState } from "react"
import Produto from '../../../models/Produto'
import useLocalStorage from "react-use-localstorage"
import { Card, CardHeader, CardMedia, CardContent, Typography, Divider, Grid, Button } from "@mui/material"
import { busca } from "../../../services/Service"
import { Link } from "react-router-dom"

function ListarProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    const [token, setToken] = useLocalStorage('token')

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

    return (
        <>
            <Link to="/cadastrar_produto">
                <Button variant="contained">Cadastrar Produto</Button>
            </Link>

            <Grid container display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                {
                    produtos.map(produto => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} display='flex' justifyContent='center' alignItems='center' marginBottom={8}>
                            <Card sx={{ width: 300, height: 550 }}>
                                <CardHeader
                                    title={produto.nome}
                                    subheader={produto.usuario?.nome + " - " + produto.categoria?.nome}
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={produto.foto}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {produto.descricao}
                                    </Typography>
                                    <Divider />
                                    <Typography variant="body2" color="text.secondary">{"R$" + produto.preco.toFixed(2)}</Typography>
                                    <Typography variant="body2" color="text.secondary">{"Estado: " + (+produto.estado == 1 ? "Novo" : "Usado")}</Typography>
                                    <Typography variant="body2" color="text.secondary">{"Reciclável: " + (+produto.reciclavel == 1 ? "Sim" : "Não")}</Typography>
                                    <Typography variant="body2" color="text.secondary">{"Curtidas: " + produto.curtidas}</Typography>
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