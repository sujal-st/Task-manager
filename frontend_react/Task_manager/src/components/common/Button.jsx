import React from 'react'

function Button({ btnLabel, btnType,btnExt, onClick }) {
    const buttonStyle=(btnType==="Primary"? "bg-[#2563EB] text-[#F9FAFB] ": " border-2 border-[#374151]")
    const buttonExtra=(btnExt==="Primary-large"? "w-full":"")
    return (
        <button className={`${buttonStyle} ${buttonExtra} font-bold px-4 py-2 rounded-[8px] w-[150px] cursor-pointer`} onClick={onClick}>{btnLabel}</button>
    )
}

export default Button
