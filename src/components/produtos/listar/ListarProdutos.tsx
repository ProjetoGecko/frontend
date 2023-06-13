import { Grid } from "@mui/material"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import Produto from "../../../models/Produto"
import { busca } from "../../../services/Service"
import { UserState } from "../../../store/token/Reducer"
import TabProdutos from "../../tabProdutos/TabProdutos"

function ListarProdutos({ filter, preco, search, categoria }: { filter: string, preco: string[], search: string, categoria: string }) {
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

    switch (+filter) {
        case 0: {
            return (
                <Grid container item xs={12} md={8} lg={9} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.usuario?.id != +idUser)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 1: {
            return (
                <Grid container item xs={12} md={8} lg={9} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.usuario?.id != +idUser)
                            .filter(produto => produto.categoria?.nome == 'Produtos Gecko')
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 2: {
            return (
                <Grid container item xs={12} md={8} lg={9} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.usuario?.id != +idUser)
                            .filter(produto => produto.categoria?.nome == 'Produtos Gecko' && produto.estado == 0)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 3: {
            return (
                <Grid container item xs={12} md={8} lg={9} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.usuario?.id != +idUser)
                            .filter(produto => produto.categoria?.nome == 'Produtos Gecko' && produto.reciclavel == 1)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 4: {
            return (
                <Grid container item xs={12} md={8} lg={9} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.usuario?.id != +idUser)
                            .filter(produto => produto.categoria?.nome == 'Produtos Gecko' && produto.estado == 0 && produto.reciclavel == 1)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 5: {
            return (
                <Grid container item xs={12} md={8} lg={9} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.usuario?.id != +idUser)
                            .filter(produto => produto.estado == 0)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 6: {
            return (
                <Grid container item xs={12} md={8} lg={9} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.usuario?.id != +idUser)
                            .filter(produto => produto.estado == 0 && produto.reciclavel == 1)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto.nome.includes(''))
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        case 7: {
            return (
                <Grid container item xs={12} md={8} lg={9} display='flex' justifyContent='start' alignItems='center' minHeight='100vh' marginTop={8}>
                    {
                        produtos.filter(produto => produto.usuario?.id != +idUser)
                            .filter(produto => produto.reciclavel == 1)
                            .filter(produto => produto.preco > +preco[0] && produto.preco < +preco[1])
                            .filter(produto => produto.nome.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || produto.descricao.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                            .filter(produto => categoria != '' ? produto.categoria?.nome == categoria : produto)
                            .map(produto => (
                                <TabProdutos produtoVar={produto} idUserVar={idUser} />
                            ))
                    }
                </Grid>
            )
        }
        default: {
            return (
                <>
                </>
            )
        }
    }
}

export default ListarProdutos