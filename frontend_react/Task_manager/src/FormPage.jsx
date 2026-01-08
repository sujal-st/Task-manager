import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from "./components/common/Navbar2"
function FormPage() {
  return (
    <>
      <Navbar2/>
      <Outlet/>
    </>
  )
}

export default FormPage
