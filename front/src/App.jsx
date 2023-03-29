import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Main from "./components/Main/Main"
import Login from "./components/Login/Login"
import ComunidadMain from "./components/ComunidadMain/ComunidadMain"
import './App.css'

function App() {

  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<ComunidadMain />}/>
          <Route path="/recompensas" element={<div>recompensas</div>}/>
          <Route path="/misiones" element={<div>misiones</div>}/>
          <Route path="/tienda" element={<div>tienda</div>}/>
          <Route path="/ajustes" element={<div>ajustes</div>}/>
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App
