import './Home.css';
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import NavigationBar from '../NavigationBar/NavigationBar';
import HomeContent from '../HomeContent/HomeContent';
import Timeline from '../Timeline/Timeline';

export default function Home() {
    return (
        <div className='crt'>
            <motion.div className='landingPage'>
                <TypeAnimation
                    cursor={true}
                    sequence={["WELCOME!"]}
                    wrapper='h1'
                    speed={1}
                    repeat={0}
                />
                <motion.div style={{width: '100%'}} 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>
                    <NavigationBar />
                </motion.div>
                <HomeContent />
                <Timeline />
            </motion.div>
        </div>
    );
}