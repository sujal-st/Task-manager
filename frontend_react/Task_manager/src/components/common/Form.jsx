import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"
import Button from './Button'
import { NavLink, useNavigate } from 'react-router-dom'

function Form({ formType }) {
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email:"",
        password:""
    })
    const handleForm = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const url = formType === "Register" ? "http://localhost:5000/user/register" : "http://localhost:5000/user/login"
            const payload = formType === "Register" ?
                {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                } : {
                    email: formData.email,
                    password: formData.password
                }
            const res = await fetch(url, {
                method: "POST",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload)
            })
            if (!res.ok)
                throw new Error("Failed to submit registr")
            const data = await res.json();

            if (formType === "LogIn") {
                localStorage.setItem("user", JSON.stringify(data.user))
                localStorage.setItem("token", data.token)
                window.dispatchEvent(new Event("storage"))
                setMessage(data.message || "Login successful")

                setTimeout(() => {
                    navigate("/dashboard", { replace: true })
                }, 500);
            }

            setMessage(data.message || "Signup successful")
            setTimeout(() => {
                navigate("/login", { replace: true })
            }, 500);
        }
        catch (err) {
            console.error(err.message)
        }
    }


    return (
        <form onSubmit={handleSubmit} className='w-[100vw] px-5 flex flex-col items-start space-y-4 md:w-[40vw]'>
            {formType === "Register" &&
                (<div className='w-full'>
                    <label className='font-bold text-[#374151]'>Name:</label><br />
                    <input type='text' name="name" required value={formData.name} onChange={(e) => { handleForm(e) }} placeholder='Enter your name' className='bg-[#EBECEE] p-2 font-semibold text-[#737A85] w-full rounded-[8px]' />
                </div>)
            }
            <div className='w-full'>
                <label className='font-bold text-[#374151]'>Email:</label><br />
                <input type='email' name="email" required value={formData.email} onChange={(e) => { handleForm(e) }} placeholder='example@gmail.com' className='bg-[#EBECEE] p-2 font-semibold text-[#737A85] w-full rounded-[8px]' />
            </div>
            <div className='w-full'>
                <label className='font-bold text-[#374151]'>Password:</label><br />
                <input type='password' name="password" required value={formData.password} onChange={(e) => { handleForm(e) }} placeholder='Enter your password' className='bg-[#EBECEE] p-2 font-semibold text-[#737A85] w-full rounded-[8px]' />
            </div>
            <button className='bg-[#2EC2BD] text-[#F9FAFB] font-bold px-4 py-2 rounded-[8px] w-full cursor-pointer' type='submit' >{formType === "Register" ? "Create Account" : "Log In"}</button>
            <p className='font-bold mx-auto'>{formType === "Register" ? "Already have and account?" : "Don’t have an account?"} <NavLink to={formType === "Register" ? `/login` : `/register`} className="text-[#2EC2BD]">{formType === "Register" ? `LogIn` : `Sign Up`}</NavLink></p>
            {message && (
                <p className={`text-center mt-4 text-sm ${message.includes("success") || message.includes("successful")
                    ? "text-green-600"
                    : "text-[#AB2320]"
                    }`}>
                    {message}
                </p>
            )}
        </form>
    )
}

export default Form
