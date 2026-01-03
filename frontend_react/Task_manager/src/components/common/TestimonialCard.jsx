import React from 'react'

function TestimonialCard({ info }) {
    const profileName = info.name;
    const fName = profileName[0]
    return (
        <div className='mx-auto bg-[#EAF9F8] rounded-[4px] w-full h-full p-4 flex flex-col justify-between space-y-1 drop-shadow-xl'>
            <img src={info.icon} className=' p-2 rounded-xl absolute top-8 right-0 z-0' width={50} />
            <h3 className='text-[#374151] font-bold text-[1.2rem] z-10'>{info.title}</h3>
            <div className='flex items-center gap-2'>
            <span className='bg-[#2EC2BD] w-[50px] h-[50px] rounded-[150px] flex justify-center items-center text-center text-white font-bold'>{fName}</span>
            <p className='text-[#374151] font-semibold'>{info.name}</p>
            </div>
        </div>
    )
}

export default TestimonialCard
