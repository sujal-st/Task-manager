import React from 'react'
import Form from "../components/common/Form"
import logo from "../assets/logo.png"
function Login() {
  return (
    <div className='mx-auto px-10 py-12 flex flex-col items-center space-y-2'>
      < img src={logo} width={60} />
      <h1 className='my-5 font-bold text-3xl text-center'>Welcome Back!</h1>
      <p className='w-fit text-center text-[#5F6774] font-semibold'>Manage your tasks and stay productive.</p>

      <Form formType="Login"/>
    </div >
  )
}

export default Login
