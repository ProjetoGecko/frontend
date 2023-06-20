import React, { useContext, useState } from 'react';
import Produto from '../../models/Produto';
import { CarrinhoContext } from '../../store/CarrinhoContext/CarrinhoContext';
import './Carrinho.css'
import { Box, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';

interface CarrinhoProps {
  produtosNoCarrinho: Produto[];
}

function PgCarrinho() {
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
      <Box display='flex' flexDirection='column' alignItems='center' className='bodycar'>
        <Typography marginBottom='60px' variant='h2' color='textPrimary' className='tituloCarrinho'>Meu Carrinho</Typography>
        <Typography color='textPrimary' className='infoCarrinho'>O carrinho está vazio.</Typography>
      </Box>
    );
  }

  if (compraFinalizada) {
    return (
      <Box display='flex' flexDirection='column' alignItems='center' className='bodycar'>
        <Typography marginBottom='70px' variant='h2' color='textPrimary' className='tituloCarrinho'>Meu Carrinho</Typography>
        <Typography color='textPrimary' className='infoCarrinho'>Agradecemos a sua compra!</Typography>
      </Box>
    );
  }

  return (
    <Box className='bodycar'>
      <Typography marginBottom='60px' variant='h2' color='textPrimary' className='tituloCarrinho'>Meu Carrinho</Typography>

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
                  </Box >
                </TableCell>
                <TableCell>{"R$ " + produto.preco.toFixed(2).toString().replace('.', ',')}</TableCell>
                <TableCell>
                  <Box display='flex' justifyContent='flex-end'>
                    <Button variant='contained' color='secondary' onClick={() => handleRemoverDoCarrinho(produto)}>
                      Remover
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={2} marginTop='80px' display='flex' justifyContent='center'>
        <Button variant='contained' color='primary' onClick={handleFinalizarCompra}>
          Finalizar Compra
        </Button>
      </Box>


    </Box>
  );
}

export default PgCarrinho;