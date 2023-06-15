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
import ContatoForm from './components/contato/ContatoForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Produtos from './pages/Produtos/Produtos'
import MeusProdutos from './pages/MeusProdutos/MeusProdutos'
import MycChatbot from './components/chatbot/Chatbot';
import FloatingButton from './components/FloatingButton/FloatingButton';
import Carrinho from './pages/Carrinho/Carrinho'
import MeuPerfil from './pages/MeuPerfil/MeuPerfil'

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <ThemeProvider theme={geckoTheme}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sobre' element={<><Sobre /><Contato /></>} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Cadastrar' element={<Cadastrar />} />
              <Route path='/Cadastrar_produto' element={<CadastrarProduto />} />
              <Route path='/Cadastrar_Categoria' element={<CadastrarCategoria />} />
              <Route path='/Listar_produtos' element={<Produtos />} />
              <Route path='/Listar_Categorias' element={<ListarCategorias />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path='/Cadastrar_produto/:id' element={<CadastrarProduto />} />
              <Route path='/Cadastrar_categoria/:id' element={<CadastrarCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/contato" element={<ContatoForm />} />
              <Route path="/meus_produtos" element={<MeusProdutos />} />
              <Route path='/meu_perfil' element={<MeuPerfil />} />
              <Route path='/chat' element={<MycChatbot/>} />
              <Route path='/Carrinho' element={<Carrinho/>} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App