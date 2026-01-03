import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import GetStarted from './pages/GetStarted'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
