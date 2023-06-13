import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Produto from '../../models/Produto'
import { busca } from '../../services/Service'
import { UserState } from '../../store/token/Reducer'
import TabProdutos from '../../components/tabProdutos/TabProdutos'
import { Grid } from '@mui/material'

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
            <Grid container item xs={12} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginY={5}>
                {
                    produtos.filter(produto => produto.usuario?.id == +idUser).map(produto => (
                            <TabProdutos produtoVar={produto} idUserVar={idUser} />
                        ))
                }
            </Grid>
        </>
    )
}

export default MeusProdutos