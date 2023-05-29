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
import ListarProdutos from './components/produtos/listar/ListarProdutos'
import ListarCategorias from './components/categorias/listar/ListarCategorias'
import { geckoTheme } from './theme/GeckoTheme'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/Store'

function App() {
  return (
    <>
      <Provider store={store}>
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
              <Route path='/Listar_produtos' element={<ListarProdutos />} />
              <Route path='/Listar_Categorias' element={<ListarCategorias />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App