import React from 'react'
import { Box, Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Produto from '../../models/Produto';
import FavoriteIcon from '@mui/icons-material/Favorite'
import './TabProduto.css'

export default function TabProdutos({ produtoVar, idUserVar }: { produtoVar: Produto, idUserVar: string }) {
    function truncateString(str: string, num: number) {
        if (str.length <= num) {
            return str
        }
        return str.slice(0, num) + '...'
    }
//
    return (
        <>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={4} display='flex' justifyContent='center' alignItems='center' marginBottom={8}>
                <Card elevation={4} className="card" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: 300, height: 650 }}>
                    <CardHeader
                        title={truncateString(produtoVar.nome, 15)}
                        subheader={produtoVar.usuario?.nome + " - " + produtoVar.categoria?.nome}
                    />
                    <CardMedia
                        component="img"
                        height="200"
                        image={produtoVar.foto}
                    />
                    <CardContent>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography variant="h6" color="text.secondary">{"R$ " + produtoVar.preco.toFixed(2).toString().replace('.', ',')}</Typography>
                            <Box display='flex' alignItems='center' gap='10%'>
                                <Typography>
                                    {produtoVar.curtidas !== null ? produtoVar.curtidas : "0"}
                                </Typography>
                                <FavoriteIcon />
                            </Box>
                        </Box>
                        <br />
                        <Typography variant="body2" color="text.secondary" height='10vh' sx={{ overflow: 'hidden', wordWrap: 'break-word' }}>
                            {truncateString(produtoVar.descricao, 100)}
                        </Typography>
                        <br />
                        <Box display='flex' justifyContent='space-around' alignItems='center' width='100%'>
                            <Typography variant="body2" color="text.secondary">{+produtoVar.estado == 1 ? "Novo" : "Usado"}</Typography>
                            <hr />
                            <Typography variant="body2" color="text.secondary">{+produtoVar.reciclavel == 1 ? "Reciclável" : "Não reciclável"}</Typography>
                        </Box>
                        <Box visibility={+idUserVar !== produtoVar.usuario?.id ? 'hidden' : 'visible'} display='flex' justifyContent='space-between' alignItems='center' width='100%' style={{ marginTop: '1em' }}>
                            <Link to={`/deletarproduto/${produtoVar.id}`} className="text-decorator-none">
                                <Box className="input4" mx={1}>
                                    <Button variant="contained" size='small' style={{ backgroundColor: '#973838', color: 'white' }}>
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                            <Link to={`/cadastrar_produto/${produtoVar.id}`} className="text-decorator-none" >
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size='small' style={{ backgroundColor: '#bb872c', color: 'white' }} >
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardContent>
                    <Button variant="contained" className="botaocompra" style={{ backgroundColor: '#bb872c', color: 'white' }}>Comprar</Button>
                </Card>
            </Grid>
        </>
    )
}