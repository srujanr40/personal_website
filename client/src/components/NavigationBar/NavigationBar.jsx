import React from 'react';
import './NavigationBar.css'; // Import your CSS file for navigation bar styling
import { motion } from "framer-motion"

function NavigationBar() {
    return (
        <div className="navbar">
            <a href="/">
                <motion.button className = 'styled-button' whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                    Home
                </motion.button>
            </a>
            <a href="/projects">
                <motion.button className = 'styled-button' whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                    Projects
                </motion.button>
            </a>
            <a href="/resume">
                <motion.button className = 'styled-button' whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                    Resume
                </motion.button>
            </a>
            <a href="/contact">
                <motion.button className = 'styled-button' whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
                    Contact
                </motion.button>
            </a>
        </div>
    );
}

export default NavigationBar;