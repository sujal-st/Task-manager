import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToSection() {
    const { hash,path } = useLocation()

    useEffect(() => {
        console.log(hash)
        if (!hash) return

        const timeout = setTimeout(() => {
                const element = document.querySelector(hash)
                console.log(element)
                if (element)
                    element.scrollIntoView({ behaviour: "smooth" })
        }, 100)
        return ()=> clearTimeout(timeout)
    }, [hash,path])
    return null
}

export default ScrollToSection
