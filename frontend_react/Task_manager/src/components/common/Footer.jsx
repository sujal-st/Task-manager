import React from 'react'
import logo from "../../assets/logo.svg"

function Footer() {

    const links = [
        { title: "Product", l: ["Features", "Pricing", "Integrations", "Changelog"] },
        { title: "Company", l: ["About", "Blog", "Press", "Careers"] },
        { title: "Resources", l: ["Help Center", "Community", "Webinars", "Templates"] },
        { title: "Legal", l: ["Privacy", "Terms", "Security", "Status"] },
    ]
    return (
        <>
            <footer className='mt-8 px-6 w-full flex flex-col lg:flex-row border-b-2 pb-2.5'>
                <div className='flex flex-col lg:w-[30%]'>
                    <div className="p-5 heading flex items-center justify-start">
                        <img src={logo} className='p-1 rounded-[8px] bg-[#2EC2BD]' width={40} />
                        <h2 className='m-5 font-bold text-3xl text-center text-[#2EC2BD]'>Tactful</h2>
                    </div>
                    <div>
                        <p className='px-5 text-[#5F6774] text-[1.2rem] md:text-[1rem]'>The simple, beautiful way to manage your tasks and projects. Built for people who want to get things done.</p>
                    </div>
                </div>
                <div className=" footerFrame grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mx-auto">
                    {links.map((link) =>
                    (
                        <div className=' p-5 self-center flex flex-col space-y-3'>
                            <div key={link} className='text-[#374151] font-bold text-[1.1rem]'>{link.title}</div>
                            {link.l.map((l) => (
                                <div className='text-[1rem] font-semibold text-[#5F6774]'>{l}</div>
                            ))}
                        </div>
                    )
                    )
                    }
                </div>
            </footer>
            <div className="p-3 copyright text-[#5F6774] text-center">
                © 2026 Taskly. All rights reserved.
            </div>
        </>

    )
}

export default Footer
