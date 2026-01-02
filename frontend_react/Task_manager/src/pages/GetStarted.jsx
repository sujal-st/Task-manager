import React from 'react'
import logo from "../assets/logo.svg"
import feat1 from "../assets/feat1.svg"
import feat2 from "../assets/feat2.svg"
import feat3 from "../assets/feat3.svg"
import feat4 from "../assets/feat4.svg"
import { NavLink } from 'react-router-dom'
import Button from '../components/common/Button'
import FeatureCard from '../components/common/FeatureCard'
function GetStarted() {
    const features = [
        { icon: feat1, title: "Smart Task Management", description: "Create, organize, and prioritize tasks with ease. Set due dates, add notes, and never miss a deadline." },
        { icon: feat2, title: "Team Collaboration", description: "Assign tasks, share projects, and work together seamlessly. Keep everyone aligned and accountable." },
        { icon: feat3, title: "Progress Analytics", description: "Track your productivity with beautiful charts. Understand where your time goes." },
        { icon: feat4, title: "Secure & Private", description: "Create, organize, and prioritize tasks with ease. Set due dates, add notes, and never miss a deadline." },
    ]
    return (
        <>
            <section>
                <div className='mx-auto px-10 py-12 flex flex-col items-center space-y-4'>
                    <h1 className='my-5 font-bold text-4xl text-center'>Finally, a task manager you'll <span className="text-[#2EC2BD]">actually use</span></h1>
                    <img src={logo} className='p-1 rounded-[8px] bg-[#2EC2BD]' width={100} />

                    <p className='w-fit text-center text-[#5F6774]'>Organize your work, hit your goals, and feel in control. Taskly is the simple, beautiful way to manage everything from daily tasks to complex projects.</p>
                    <NavLink to="/register">
                        <Button btnType="Primary" btnLabel="Get Started" />
                    </NavLink>
                    <NavLink to="/login">
                        <Button btnType="Secondary" btnLabel="Log In" className="hover: scale-3d" />
                    </NavLink>
                </div>
            </section>
            <section className='px-10 mx-auto flex flex-col items-center space-y-5 lg:min-w-167 h-full'>
                <h2 className='m-5 font-bold text-3xl text-center text-[#2EC2BD]'>FEATURES</h2>
                <h2 className='w-fit text-center text-2xl text-[#374151] font-bold'>Everything you need to stay productive</h2>
                <p className='w-fit text-center text-[#5F6774]'>Powerful features designed to help you focus on what matters most.</p>

                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-6 space-y-3'>
                    {features.map((feature) => (
                        
                        <FeatureCard key={feature} info={feature}/>
                        
                    ))}
                </div>
            </section>
        </>
    )
}

export default GetStarted
