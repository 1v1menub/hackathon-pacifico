import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Main from "./components/Main/Main"
import Login from "./components/Login/Login"
import battlepass from "./assets/battlepass.svg"
import misiones from "./assets/misiones.svg"
import ajustes from "./assets/ajustes.svg"
import comunidad from "./assets/comunidad.svg"
import tienda from "./assets/tienda.svg"
import ComunidadMain from "./components/ComunidadMain/ComunidadMain"
import './App.css'

function App() {

  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<ComunidadMain image={comunidad}/>}/>
          <Route path="/recompensas" element={<ComunidadMain image={battlepass} />}/>
          <Route path="/misiones" element={<ComunidadMain image={misiones} />}/>
          <Route path="/tienda" element={<ComunidadMain image={tienda} />}/>
          <Route path="/ajustes" element={<ComunidadMain image={ajustes} />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
