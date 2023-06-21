import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Produto from '../../models/Produto'
import { busca } from '../../services/Service'
import { UserState } from '../../store/token/Reducer'
import TabProdutos from '../../components/produtos/tabProdutos/TabProdutos'
import { Grid, Typography, Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

function MeusProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const idUser = useSelector<UserState, UserState['id']>(
        (state) => state.id
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

    produtos.sort((a, b) => b.id - a.id)

    return (
        <>
            <Box my={8} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Typography variant='h2' color='textPrimary' textAlign='center'>Meus Produtos</Typography>
                <Grid container item xs={12}
                    display={produtos.filter(produto => produto.usuario?.id == +idUser).length != 0 ? 'flex' : 'none'}
                    justifyContent='start' alignItems='center' minHeight='80vh' marginY={5}
                >
                    {
                        produtos.filter(produto => produto.usuario?.id == +idUser).map(produto => (
                            <TabProdutos produtoVar={produto} idUserVar={idUser} />
                        ))
                    }
                </Grid>
                <Box minHeight='80vh'
                    display={produtos.filter(produto => produto.usuario?.id == +idUser).length != 0 ? 'none' : 'flex'}
                    flexDirection='column' justifyContent='center' alignItems='center' gap={5}
                >
                    <Typography textAlign='center' variant='body1' color='textPrimary'>Você não possui produtos ainda. Faça um anúncio!</Typography>
                    <Link to="/cadastrar_produto">
                        <Button variant="contained">Cadastrar Produto</Button>
                    </Link>
                </Box>
            </Box>
        </>
    )
}

export default MeusProdutos