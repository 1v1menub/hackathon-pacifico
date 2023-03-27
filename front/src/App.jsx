import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Main from "./components/Main/Main"
import './App.css'

function App() {

  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/comunidad" element={<div>comunidad</div>}/>
          <Route path="/recompensas" element={<div>recompensas</div>}/>
          <Route path="/misiones" element={<div>misiones</div>}/>
          <Route path="/tienda" element={<div>tienda</div>}/>
          
        </Route>
        <Route path="/login" element={<div>lolazo</div>}/>
      </Routes>
    </div>
  )
}

export default App
