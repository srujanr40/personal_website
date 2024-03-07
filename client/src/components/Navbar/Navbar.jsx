import React, {useState, useEffect} from "react"
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
            x: -4,
            y: -4,
        },
    }

    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    }

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => setIsOn(!isOn);

    useEffect(() => {
        if (isOn) {
            document.body.style.backgroundColor = "#353b4d"; // Use the correct color code for deep blue
            document.body.style.color = "#FFFFFF";
            document.querySelectorAll('.nav_button').forEach(button => {
                button.style.backgroundColor = "#353b4d";
            });
            document.querySelectorAll('.learn_more_button').forEach(button => {
                button.style.backgroundColor = "#353b4d";
            });
        } else {
            document.body.style.backgroundColor = ""; // Reset to default or previous color
            document.body.style.color = ""; // Reset to default or previous text color
            document.querySelectorAll('.nav_button').forEach(button => {
                button.style.backgroundColor = "#FFFFFF";
            });
            document.querySelectorAll('.learn_more_button').forEach(button => {
                button.style.backgroundColor = "#FFFFFF";
            });
        }
    }, [isOn]); 

    return (
        <div className="navbar">
            <div className = "button_div" style={buttonBackgroundStyle}>
                <motion.button className='nav_button' variants={learnMoreButtonVariants} whileHover='whileHover' style={{fontWeight: 'bolder'}} onClick={() => window.location.href = `${process.env.PUBLIC_URL}/srujan_resume.pdf`}>Resume</motion.button>
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
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
            </div>
        </div>
    )
}

export default Navbar

