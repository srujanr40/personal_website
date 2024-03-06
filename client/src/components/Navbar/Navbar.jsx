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
                <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => window.open('https://github.com/srujanr40/happyhaiku')} style={{fontWeight: 'bold'}}>Resume</motion.button>
            </div>
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => window.open('https://github.com/srujanr40/happyhaiku')}>About</motion.button>
            </div>
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => window.open('https://github.com/srujanr40/happyhaiku')}>Technologies</motion.button>
            </div>
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => window.open('https://github.com/srujanr40/happyhaiku')}>Projects</motion.button>
            </div>
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' onClick={() => window.open('https://github.com/srujanr40/happyhaiku')}>Experience</motion.button>
            </div>
        </div>
    )
}

export default Navbar

