import React from 'react'
import feat1 from "../assets/feat1.svg"
import feat2 from "../assets/feat2.svg"
import feat3 from "../assets/feat3.svg"
import feat4 from "../assets/feat4.svg"
import step1 from "../assets/step1.svg"
import step2 from "../assets/step2.svg"
import step3 from "../assets/step3.svg"
import testi from "../assets/testi.svg"
import hero from "..//assets/hero-illustration.png"
import { NavLink } from 'react-router-dom'
import Button from '../components/common/Button'
import FeatureCard from '../components/common/FeatureCard'
import StepCard from '../components/common/StepCard'
import TestimonialCard from '../components/common/TestimonialCard'
import { FaStar } from 'react-icons/fa'
function GetStarted() {
    const features = [
        { icon: feat1, title: "Smart Task Management", description: "Create, organize, and prioritize tasks with ease. Set due dates, add notes, and never miss a deadline." },
        { icon: feat2, title: "Team Collaboration", description: "Assign tasks, share projects, and work together seamlessly. Keep everyone aligned and accountable." },
        { icon: feat3, title: "Progress Analytics", description: "Track your productivity with beautiful charts. Understand where your time goes." },
        { icon: feat4, title: "Secure & Private", description: "Create, organize, and prioritize tasks with ease. Set due dates, add notes, and never miss a deadline." },
    ]
    const steps = [
        { icon: step1, title: "Capture Everything", description: "Quickly add tasks from anywhere. Voice, text, email — it all goes into your inbox for processing." },
        { icon: step2, title: "Organize & Prioritize", description: "Drag tasks into projects, set priorities, and add due dates. Your perfect system, your way." },
        { icon: step3, title: "Get Things Done", description: "Focus on what matters with our distraction-free interface. Check off tasks and feel the satisfaction." },
    ]
    const testimonials = [
        { icon: testi, title: `"Taskly has completely transformed how I manage my freelance business. I've never been more organized."`, name: "Sarah Chen" },
        { icon: testi, title: `"Finally, a task manager that doesn't feel like work. The interface is beautiful and intuitive."`, name: "Marcus Johnson" },
        { icon: testi, title: `"Our team productivity increased by 40% after switching to Taskly. The collaboration features are game-changing."`, name: "Emily Rodriguez" },
    ]
    return (
        <div className='flex flex-col space-y-4'>
            <section className='flex flex-col lg:flex-row lg:h-[80vh] lg:items-center px-10'>
                <div className='mx-auto px-10 py-12 flex flex-col items-center space-y-4 md:mx-0 lg:items-start lg:space-y-10'>
                    <h1 className='my-5 font-bold text-4xl text-center min-lg:text-5xl md:text-left lg:text-6xl'>Finally, a task manager you'll <span className="text-[#2EC2BD]">actually use</span></h1>
                    {/* <img src={logo} className='p-1 rounded-[8px] bg-[#2EC2BD]' width={100} /> */}
                    <p className='w-fit text-center text-[#5F6774] md:text-left'>Organize your work, hit your goals, and feel in control. Taskly is the simple, beautiful way to manage everything from daily tasks to complex projects.</p>
                    <div className='flex flex-col gap-3 md:flex-row md:items-center md:self-start'>
                        <NavLink to="/register">
                            <Button btnType="Primary" btnLabel="Get Started" />
                        </NavLink>
                        <NavLink to="/login">
                            <Button btnType="Secondary" btnLabel="Log In" className="hover: scale-3d" />
                        </NavLink>
                    </div>
                    <div className='hidden md:flex md:gap-2'>
                        <div className="flex -space-x-3">
                            <div className="bg-[#2EC2BD] text-white w-10 h-10 rounded-full bg-gradient-hero border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground">A</div>
                            <div className="bg-[#2EC2BD] text-white w-10 h-10 rounded-full bg-gradient-hero border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground">B</div>
                            <div className="bg-[#2EC2BD] text-white w-10 h-10 rounded-full bg-gradient-hero border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground">C</div>
                            <div className="bg-[#2EC2BD] text-white w-10 h-10 rounded-full bg-gradient-hero border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground">D</div></div>
                        <div className='flex flex-col justify-center'>
                            <div className='flex items-center'>
                                <FaStar color='#f7c627' />
                                <FaStar color='#f7c627' />
                                <FaStar color='#f7c627' />
                                <FaStar color='#f7c627' />
                            </div>
                            4.9/5 from 2,000+ reviews
                        </div>
                    </div>
                </div>
                <img src={hero} alt="Taskly productivity illustration with floating task cards and checkmarks" className="w-full max-w-lg mx-auto"></img>

            </section>

            <section id="features" className='px-10 mx-auto flex flex-col items-center space-y-5 lg:min-w-167 h-full'>
                <h2 className='m-5 font-bold text-3xl text-center text-[#2EC2BD]'>FEATURES</h2>
                <h2 className='w-fit text-center text-2xl text-[#374151] font-bold'>Everything you need to stay productive</h2>
                <p className='w-fit text-center text-[#5F6774]'>Powerful features designed to help you focus on what matters most.</p>

                <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 lg:gap-6 space-y-3'>
                    {features.map((feature) => (
                        <FeatureCard key={feature.icon} info={feature} />
                    ))}
                </div>
            </section>
            <section id="howitworks" className='mt-8 px-10 mx-auto flex flex-col items-center space-y-5 lg:min-w-167 h-full'>
                <h2 className='m-5 font-bold text-3xl text-center text-[#2EC2BD]'>HOW IT WORKS</h2>
                <h2 className='w-fit text-center text-2xl text-[#374151] font-bold'>Simple workflow, powerful results</h2>
                <p className='w-fit text-center text-[#5F6774]'>Get started in minutes, not hours. Here's how Taskly transforms your productivity.</p>

                <div className='grid grid-cols-1 gap-5   md:grid-cols-3 lg:grid-cols-3 space-y-3 lg:gap-6'>
                    {steps.map((step) => (
                        <StepCard key={step.icon} info={step} />
                    ))}
                </div>
            </section>
            <section id="testimonials" className='mt-8 px-10 mx-auto flex flex-col items-center space-y-5 lg:min-w-167 h-full'>
                <h2 className='m-5 font-bold text-3xl text-center text-[#2EC2BD]'>TESTIMONIAL</h2>
                <h2 className='w-fit text-center text-2xl text-[#374151] font-bold'>Loved by thousands of productive people</h2>
                <p className='w-fit text-center text-[#5F6774]'>See what our users have to say about their experience with Taskly.</p>

                <div className='grid grid-cols-1 gap-5  lg:gap-6 md:grid-cols-2 lg:grid-cols-3 space-y-3'>
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.name} info={testimonial} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default GetStarted
