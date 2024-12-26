import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Create from './components/pages/Create'
import All from './components/pages/All'
import Update from './components/pages/Update'
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Create" element={<Create/>}/>
      <Route path="/All" element={<All/>}/>
      <Route path="/:id" element={<Update/>}/>
    </Routes>
    </>
  )
}

export default App
