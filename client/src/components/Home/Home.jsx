import './Home.css';
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import Email from '../Email/Email';

export default function Home() {
    const [showScrollPrompt, setShowScrollPrompt] = useState(true);

    const waveVariants = {
        wave: {
            rotate: [0, 14, -8, 14, 0],
            transition: {
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            },
        },
    };

    const bounceVariants = {
        bounce: {
            y: ["0%", "15%", "0%"],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeOut",
                },
            },
        },
    };

    const fadeVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollPrompt(false);
            } else {
                setShowScrollPrompt(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
        <div className='home'>
            <div className='title_text'>
                <motion.div variants={waveVariants} animate="wave">
                    <h1>{"👋  \u00A0"}</h1>
                </motion.div>
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        "HI THERE!",
                        2000,
                        "I'M SRUJAN",
                    ]}
                    wrapper='h1'
                    speed={1}
                    repeat={0}
                />
            </div>
            <br />
            <div className='intro_text'>
                <p>
                    I'm a full-stack developer. I'm here to turn caffeine into code and dreams into digital reality.
                </p>
            </div>
            <br />
            <Email />
            <AnimatePresence>
                {showScrollPrompt && (
                    <motion.div 
                        variants={fadeVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <motion.div
                            className="scroll_prompt"
                            variants={bounceVariants}
                            animate="bounce"
                        >
                            <p>scroll to continue</p>
                            <motion.span>↓</motion.span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
            <div style={{ height: '2000px' }}></div> {/* Empty space */}
        </div>
    );
}