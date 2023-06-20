import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import useLocalStorage from 'react-use-localstorage'
import BarraPesquisa from '../../components/barraPesquisa/BarraPesquisa'
import BarraFiltro from '../../components/barraFiltro/BarraFiltro'
import ListarProdutos from '../../components/produtos/listar/ListarProdutos'

function Produtos() {
    const [filterNumber, setFilterNumber] = useLocalStorage('filterNumber')
    const [precoMin, setPrecoMin] = useLocalStorage('precoMin')
    const [precoMax, setPrecoMax] = useLocalStorage('precoMax')
    const [searchString, setSearchString] = useLocalStorage('searchString')
    const [categoriaString, setCategoriaString] = useLocalStorage('categoriaString')

    useEffect(() => {
        document.getElementById('aplicar')!.onclick = function () {
            setFilterNumber(filterNumber.concat('oie'))
        }
        document.getElementById('procurar')!.onclick = function () {
            setFilterNumber(filterNumber.concat('oie'))
        }
        document.getElementById('categorias-busca')!.onclick = function () {
            setFilterNumber(filterNumber.concat('oie'))
        }
    }, [filterNumber, precoMin, precoMax, searchString, categoriaString])

    const precoRange = [precoMin, precoMax]

    return (
        <>
            <BarraPesquisa />
            <Grid container>
                <Grid item md={4} lg={3} py={8} display={{ xs: 'none', md: 'block' }}>
                    <BarraFiltro />
                </Grid>
                <ListarProdutos filter={filterNumber} preco={precoRange} search={searchString} categoria={categoriaString} />
            </Grid>
        </>
    )
}

localStorage.clear()

export default Produtos