import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./components/common/Navbar"
import GetStarted from './pages/GetStarted'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
