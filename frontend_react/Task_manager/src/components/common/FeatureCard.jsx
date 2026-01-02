import React from 'react'

function FeatureCard({info}) {
    return (
        <div className='mx-auto bg-[#EAF9F8] rounded-[4px] w-full h-full p-4 flex flex-col space-y-1 drop-shadow-xl'>
            <img src={info.icon} className='bg-[#2EC2BD] p-2 rounded-xl' width={50}/>
            <h3 className='text-[#374151] font-bold text-[1.5rem]'>{info.title}</h3>
            <p className='text-[#5F6774]'>{info.description}</p>
        </div>
    )
}

export default FeatureCard
