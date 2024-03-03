import React from 'react';

import './HomeContent.css'

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function HomeContent() {
    let image = 'https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/fluffy-cat-breeds-cat.jpg?resize=720%2C524'

    return (
        <div className='grid-container'>
            <div className='about_me'>
                <TypeAnimation
                    cursor={true}
                    sequence={[
                        1500,
                        "I'm Srujan Rao, a computer science student at UBC with a passion for full stack development."+
                        "I love diving into code, building cool stuff, and exploring the endless possibilities of web development.\n \n"+
                        "As a full stack enthusiast, I'm on a quest to conquer the wild, wild web. "+
                        "From front-end design to back-end magic, I'm here to turn caffeine into code and dreams into digital reality.\n \n"+
                        "Kick back, take a scroll!"
                    ]}
                    wrapper='p'
                    speed={85}
                    repeat={0}
                    style={{whiteSpace: 'pre-line'}}
                />
            </div>
            <div className='about_me_picture'>
                    <motion.div  
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                    <motion.img key={image}
                        src={image} 
                        className = 'about_me_img' 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 

                        drag
                        dragConstraints={{
                        top: -50,
                        left: -50,
                        right: 50,
                        bottom: 50,
                        }}
                    />
                </motion.div>
            </div>
        </div>
    )
}