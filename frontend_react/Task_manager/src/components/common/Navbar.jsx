import React, { useEffect, useState } from 'react'
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.png"
import MenuCard from '../MenuCard';
function Navbar() {
    const [state,setState]= useState(false)
    const toggleMenu=(e)=>{
        setState(!state)
    }
  return (
    <div className='relative'>
        <nav className='w-[100vw] bg-[#F9FAFB] p-2 flex items-center justify-between z-0 sticky top-0'>
            <div className="left flex font-bold items-center">
                <img src={logo} width={30}/>
                <span>Tactful</span>
            </div>
            <div className="right">
                <FiMenu onClick={toggleMenu} size={30}/>
            </div>
        </nav>
        
        <MenuCard state={state} toggleMenu={toggleMenu}/>
        
        
    </div>
  )
}

export default Navbar
