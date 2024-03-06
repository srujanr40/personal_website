import React from "react"
import { motion } from "framer-motion"


import "./Navbar.css"

const Navbar = () => {
    const buttonBackgroundStyle = {
        backgroundColor: 'orange',
        padding: '0px', // Adjust padding to control the size of the background
        borderRadius: '5px', // Optional: to match the button's border-radius if it has one
        display: 'inline-block', // Keeps the background size close to the button size
    }

    const learnMoreButtonVariants = {
        whileHover: {
            x: -3,
            y: -3,
        },
    }

    return (
        <div className="navbar">
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='nav_button' variants={learnMoreButtonVariants} whileHover='whileHover' style={{fontWeight: 'bold'}} onClick={() => window.location.href = `${process.env.PUBLIC_URL}/srujan_resume.pdf`}>Resume</motion.button>
            </div>
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='nav_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => document.querySelector('.about').scrollIntoView({ behavior: 'smooth', block: 'center' })}>About</motion.button>
            </div>
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='nav_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => document.querySelector('.technologies').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Technologies</motion.button>
            </div>
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='nav_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => document.querySelector('.projects').scrollIntoView({ behavior: 'smooth'})}>Projects</motion.button>
            </div>
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='nav_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => document.querySelector('.experience').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Experience</motion.button>
            </div>
        </div>
    )
}

export default Navbar

