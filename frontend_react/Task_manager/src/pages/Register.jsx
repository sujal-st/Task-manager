import React from 'react'
import Form from "../components/common/Form"
import logo from "../assets/logo.svg"
function Register() {
  return (
    <div className='mx-auto px-10 py-12 flex flex-col items-center space-y-2 md:bg-[#f3fafa] md:w-fit md:rounded-xl md:mt-5 md:drop-shadow-2xl'>
      < img src={logo} className='p-1 rounded-[8px] bg-[#2EC2BD]' width={60} />
      <h1 className='my-5 font-bold text-3xl text-center'>Get Started with Tactful</h1>
      <p className='w-fit text-center text-[#5F6774] font-semibold'>Start organizing your tasks and boost productivity.</p>

      <Form formType="Register"/>
    </div >
  )
}

export default Register
