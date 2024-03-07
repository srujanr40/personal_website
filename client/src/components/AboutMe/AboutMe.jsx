import React from 'react';
import "./AboutMe.css";
import { motion } from 'framer-motion';

export default function AboutMe() {
    const cardVariants = {
        offscreen: {
          y: 300,
          opacity: 0
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
    }

    return (
        <motion.div 
            className='about'
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true }}
        >
            <div className='about_subtitle'>
                <p>about me</p>
            </div>
            <div className='about_text'>
                <p> Welcome to my corner of the web! I'm thrilled to share my journey with you. 
                    My name is Srujan Rao, and I'm a full-stack software developer on the brink of 
                    graduating from the University of British Columbia with a BSc in Computer Science.
                </p>
                <p>
                    As a Software Engineer, I have experience working with full stack technologies. My goal is to build applications
                    that are robust, scalable, and accessible. 

                    With a passion for crafting digital solutions and a solid foundation built through co-op work experiences and 
                    engaging projects, I love diving into the ever-changing world of technology.
                </p>
                <p>
                    Beyond my professional work, I find joy in staying active and exploring the great outdoors. Hiking through scenic 
                    trails, perfecting my serve on the tennis court, and pushing boundaries in physical exercise are just a few ways 
                    I embrace an active lifestyle. Beyond this, you'll likely find me lost in the pages of a captivating book or strumming 
                    away on my guitar, always eager to learn and explore new melodies.
                </p>

                <p>
                    This website serves as a hub where I share my technical abilities and 
                    experience, and professional history. I'm glad to be sharing it with you!
                </p>
            </div>
        </motion.div>
    );
}

