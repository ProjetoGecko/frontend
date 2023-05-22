import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/static/Navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'
import Login from './pages/Login/Login'
import Cadastrar from './pages/Cadastrar/Cadastrar'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<><Sobre /><Contato /></>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastrar' element={<Cadastrar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
