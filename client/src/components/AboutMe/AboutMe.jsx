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
                <p> I'm on my way to completing a Bachelor's in Science in Computer Science from the University 
                    of British Columbia. I'm passionate about software development and I'm always looking for new 
                    opportunities to learn and grow.
                </p>
                <p>
                    As a Software Engineer, I have experience working with full stack technologies. My goal is to build applications
                    that are robust, scalable, and accessible
                </p>
            </div>
        </motion.div>
    );
}

