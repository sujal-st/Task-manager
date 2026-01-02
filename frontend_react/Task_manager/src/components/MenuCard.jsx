import React from 'react'
import { FiLogOut, FiMenu } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";
import logo from "../assets/logo.svg"
import { NavLink } from 'react-router-dom'

function MenuCard({state, toggleMenu}) {
    const menuOption = [
        { title: "Dashboard", link: "/user/dashboard",sym:<FiGrid size={24}/> }, { title: "Tasks", link: "/user/tasks",sym:<FiCheckSquare size={24}/> }, { title: "Logout", link: "",sym:<FiLogOut size={24}/> }
    ]
    return (
        <div className={`fixed h-[100vh] bg-[#00433E] text-[#EBECEE]  w-[50vw] absolute top-0 right-0 p-4 flex flex-col space-y-8 z-20 transform transition-transform duration-300 ease-in-out ${state ? "translate-x-0" : "translate-x-full"}`}>
            <div className="title flex font-bold items-center text-[1rem] gap-2">
                <FiMenu size={30}  onClick={toggleMenu}/>

                <img src={logo} className='p-1 rounded-[8px] bg-[#2EC2BD]' width={24} />
                <span>Tactful</span>
            </div>
            <div className='flex flex-col justify-start space-y-6 p-5'>
                {menuOption.map((item) => {
                    return (
                        <NavLink to={item.link} key={item.title}  className="grid grid-cols-2 items-center">
                            <span>
                                {item.sym}
                            </span>
                            <p  className='font-semibold text-[1rem]'>{item.title}</p>
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

export default MenuCard
