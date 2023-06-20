import React from 'react';
import './PgCarrinho.css';
import { useTheme } from '@mui/material';

const Carrinho: React.FC = () => {
  const theme =  useTheme();
  
  return (
    <>
      <main className='bodycar' style={{ backgroundColor: theme.palette.background.paper }}>
        <nav>
          <h2>Carrinho de Compras</h2>
        </nav>
        <section>
          <div className='card' style={{ backgroundColor: theme.palette.background.default, color: theme.palette.secondary.contrastText }}>
            <img src='' alt='imagem do produto' referrerPolicy="no-referrer"/>
            <h1>test</h1>
            <h1>Preço: R$ 30,00</h1>
            <button>Remover</button>
          </div>
          <div className='card' style={{ backgroundColor: theme.palette.background.default, color: theme.palette.secondary.contrastText }}>
            <img src='' alt='imagem do produto' referrerPolicy="no-referrer"/>
            <h1>test</h1>
            <h1>Preço: R$ 17,00</h1>
            <button>Remover</button>
          </div>
          <div className='card' style={{ backgroundColor: theme.palette.background.default, color: theme.palette.secondary.contrastText }}>
            <img src='' alt='imagem do produto' referrerPolicy="no-referrer"/>
            <h1>test</h1>
            <h1>Preço: R$ 39,00</h1>
            <button>Remover</button>
          </div>
        </section>
        <section className='sectionTotalCar' style={{ backgroundColor: theme.palette.background.default, color: theme.palette.secondary.contrastText }} >
          <ul>
            <li>
              <span>Valor Total:      R$ 86,00</span>
              <button>Finalizar</button>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default Carrinho;