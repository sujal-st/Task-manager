import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'
import Button from '../components/common/Button'

function GetStarted() {
    return (
        <div className='mx-auto px-10 py-12 flex flex-col items-center space-y-4'>
            <h1 className='my-5 font-bold text-4xl text-center'>Welcome to Tactful</h1>
            <img src={logo} width={160}/>
            <p className='w-fit text-center text-[#5F6774]'>Your personal task manager for a productive day.</p>
            <NavLink to="/register">
                <Button btnType="Primary" btnLabel="Get Started"/>
            </NavLink>
            <NavLink to="/login">
                <Button btnType="Secondary" btnLabel="Log In"/>
            </NavLink>
        </div>
    )
}

export default GetStarted
