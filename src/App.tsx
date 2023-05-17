import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/static/Navbar/Navbar'
import Footer from './components/static/Footer/Footer'
import Sobre from './pages/Sobre/Sobre'
import Contato from './pages/Contato/Contato'
import Login from './pages/Login/Login'
import './App.css'
import Cadastrar from './pages/Cadastrar/Cadastrar'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Login' element={<Cadastrar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
