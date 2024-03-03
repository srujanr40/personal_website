import './Home.css';
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function Home() {
    const [introDone, setIntroDone] = useState(false);
    const [textDone, setTextDone] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setTextDone(true);
        }, 13500);
        const introTimer = setTimeout(() => {
            setIntroDone(true);
        }, 17500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(introTimer);
        };
    }, []);

    useEffect(() => {
        if (textDone) {
            // This effect is now handled by CSS for smooth transition
        }
    }, [textDone]);

    return (
        <div className='crt' onClick={() => setIntroDone(true)}>
            {!introDone && (
                <motion.div className={`intro ${textDone ? 'start' : ''}`} key = 'intro'>
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            "HEY STRANGER!",
                            1000,
                            "IT'S GREAT TO HAVE YOU HERE",
                            1000,
                            "FEEL FREE TO BROWSE AROUND!",
                        ]}
                        wrapper='h1'
                        speed={0.5}
                        repeat={0}
                    />
                </motion.div>
            )}
            {introDone && (
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
                </motion.div>
            )}
        </div>
    );
}