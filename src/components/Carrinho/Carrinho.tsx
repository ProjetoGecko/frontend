import React, { useContext, useState } from 'react';
import Produto from '../../models/Produto';
import { CarrinhoContext } from '../../store/CarrinhoContext/CarrinhoContext';
import './Carrinho.css'
import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';

interface CarrinhoProps {
  produtosNoCarrinho: Produto[];
}

function Carrinho() {
  const { produtosNoCarrinho, removerDoCarrinho } = useContext(CarrinhoContext);
  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const handleRemoverDoCarrinho = (produto: Produto) => {
    removerDoCarrinho(produto);
  };

  const handleFinalizarCompra = () => {
    setCompraFinalizada(true);
  };

  if (produtosNoCarrinho.length === 0) {
    return (
      <main className='bodycar'>
        <h2 className='tituloCarrinho'>Carrinho de Compras</h2>
        <p className='infoCarrinho'>O carrinho está vazio</p>
      </main>
    );
  }

  if (compraFinalizada) {
    return (
      <main className='bodycar'>
        <h2 className='tituloCarrinho'>Carrinho de Compras</h2>
        <p className='infoCarrinho'>Agradecemos a sua compra!</p>
      </main>
    );
  }

  return (
    <main className='bodycar'>
      <h2 className='tituloCarrinho'>Carrinho de Compra</h2>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Produto</b></TableCell>
              <TableCell><b>Preço</b></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtosNoCarrinho.map((produto) => (
              <TableRow key={produto.id}>
                <TableCell>
                  <Box display='flex' alignItems='center'>
                    <img src={produto.foto} alt='imagem do produto' style={{ width: '50px', marginRight: '10px' }} />
                    <Typography variant='body1'>{produto.nome}</Typography>
                  </Box>
                </TableCell>
                <TableCell>R${produto.preco},00</TableCell>
                <TableCell>
                  <Button variant='contained' color='primary' onClick={() => handleRemoverDoCarrinho(produto)}>
                    Remover
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} display='flex' justifyContent='flex-end'>
        <Button variant='contained' color='primary' onClick={handleFinalizarCompra}>
          Finalizar Compra
        </Button>
      </Box>


    </main>
  );
}

export default Carrinho;