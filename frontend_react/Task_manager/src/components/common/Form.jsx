import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import Button from './Button'
import { NavLink } from 'react-router-dom'

function Form({ formType }) {
    const [formData, setFormData] = useState({
        name: "",
    })
    const handleForm = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleSubmit = async () => {
        try {
            const res = await fetch("", {
                header: {

                },
                method: "POST",
            })
            if (!res.ok)
                throw new Error("Failed to submit registr")
            const data = await res.json();

        }
        catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        handleSubmit()
    }, [])
    return (


        <form className='w-[100vw] px-5 flex flex-col items-start space-y-4'>
            {formType==="Register" &&
            (<div className='w-full'>
                <label className='font-bold text-[#374151]'>Name:</label><br />
                <input type='text' name="name" value={formData.name} onChange={(e) => { handleForm(e) }} placeholder='Enter your name' className='bg-[#EBECEE] p-2 font-semibold text-[#737A85] w-full rounded-[8px]' />
            </div>)
            }
            <div className='w-full'>
                <label className='font-bold text-[#374151]'>Email:</label><br />
                <input type='email' name="email" value={formData.email} onChange={(e) => { handleForm(e) }} placeholder='example@gmail.com' className='bg-[#EBECEE] p-2 font-semibold text-[#737A85] w-full rounded-[8px]' />
            </div>
            <div className='w-full'>
                <label className='font-bold text-[#374151]'>Password:</label><br />
                <input type='password' name="password" value={formData.password} onChange={(e) => { handleForm(e) }} placeholder='Enter your password' className='bg-[#EBECEE] p-2 font-semibold text-[#737A85] w-full rounded-[8px]' />
            </div>
            <button className='bg-[#2563EB] text-[#F9FAFB] font-bold px-4 py-2 rounded-[8px] w-full cursor-pointer' onClick={handleSubmit}>{formType==="Register"?"Create Account":"Log In"}</button>
            <p className='font-bold mx-auto'>{formType==="Register"?"Already have and account?":"Don’t have an account?"} <NavLink to={formType==="Register"?`/login`:`/register`} className="text-[#2563EB]">{formType==="Register"?`LogIn`:`Sign Up`}</NavLink></p>
        </form>


    )
}

export default Form
