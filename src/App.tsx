import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import Home from './pages/Home/Home'
import Navbar from './components/static/Navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'
import Login from './pages/Login/Login'
import Cadastrar from './pages/Cadastrar/Cadastrar'
import CadastrarProduto from './components/produtos/cadastrar/CadastrarProduto'
import CadastrarCategoria from './components/categorias/cadastrar/CadastrarCategoria'
import ListarCategorias from './components/categorias/listar/ListarCategorias'
import { geckoTheme } from './theme/GeckoTheme'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/Store'
import DeletarProduto from './components/produtos/deletar/DeletarProduto'
import DeletarCategoria from './components/categorias/deletar/DeletarCategoria'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Produtos from './pages/Produtos/Produtos'
import MeusProdutos from './pages/MeusProdutos/MeusProdutos'
import MycChatbot from './components/chatbot/Chatbot';
import MeuPerfil from './pages/MeuPerfil/MeuPerfil'
import Carrinho from './components/Carrinho/Carrinho';
import { CarrinhoProvider } from './store/CarrinhoContext/CarrinhoContext';

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <ThemeProvider theme={geckoTheme}>
          <BrowserRouter>
            <Navbar />
            <CarrinhoProvider>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastrar' element={<Cadastrar />} />
                <Route path='/cadastrar_produto' element={<CadastrarProduto />} />
                <Route path='/cadastrar_categoria' element={<CadastrarCategoria />} />
                <Route path='/listar_produtos' element={<Produtos />} />
                <Route path='/cistar_categorias' element={<ListarCategorias />} />
                <Route path="/deletar_produto/:id" element={<DeletarProduto />} />
                <Route path='/cadastrar_produto/:id' element={<CadastrarProduto />} />
                <Route path='/cadastrar_categoria/:id' element={<CadastrarCategoria />} />
                <Route path="/deletar_categoria/:id" element={<DeletarCategoria />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/meus_produtos" element={<MeusProdutos />} />
                <Route path='/chat' element={<MycChatbot />} />
                <Route path='/carrinho' element={<Carrinho />} />
                <Route path='/meu_perfil' element={<MeuPerfil />} />
              </Routes>
            </CarrinhoProvider>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App