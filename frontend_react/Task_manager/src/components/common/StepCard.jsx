import React from 'react'

function StepCard({info}) {
    return (
        <div className='mx-auto rounded-[4px] w-full h-full p-4 flex flex-col items-center space-y-1 drop-shadow-xl'>
            <img src={info.icon} className='bg-[#2EC2BD] p-2 rounded-xl drop-shadow-[#00433E]-300' width={50}/>
            <h3 className='text-[#374151] font-bold text-[1.5rem] md:text-[1rem] lg:text-[1.5rem]'>{info.title}</h3>
            <p className='text-[#5F6774] w-[70%] text-center md:text-[0.8rem]'>{info.description}</p>
        </div>
    )
}

export default StepCard
