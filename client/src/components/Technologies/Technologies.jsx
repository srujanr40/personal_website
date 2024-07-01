import React, { useState } from "react";
import { motion } from "framer-motion";

import "./Technologies.css";

export default function Technologies() {
    const [listAnimationStart, setListAnimationStart] = useState(false);

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
                duration: 0.5
            }
        }
    }

    const wipeInVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Delay between each child animation
            }
        }
    }

    // Individual item animation
    const itemVariants = {
        hidden: {
            y: '2vw', 
            opacity: 0
        },
        visible: {
            y: 0, 
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.1, 
                ease: "easeInOut"
            }
        }
    }

    return (
    <div>
      <motion.div
        className='technologies'
        variants={cardVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true }}
        onAnimationComplete={() => setListAnimationStart(true)}
      >
        <div className="technologies_subtitle">
            <p>technologies</p>
        </div>
        <motion.div 
            className="technologies_list" 
            variants={wipeInVariants} 
            initial='hidden' 
            animate={listAnimationStart ? "visible" : "hidden"}
        >
            <motion.div className="languages" variants={itemVariants}>
                <p style={{fontWeight: 'bold', paddingBottom: '10px', marginTop: '30px'}}>Languages</p>
                <p>C</p>
                <p>R</p>
                <p>Java</p>
                <p>Python</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>SQL</p>
                <p>HTML/CSS</p>
            </motion.div>
            <motion.div className="frameworks" variants={itemVariants}>
                <p style={{fontWeight: 'bold', paddingBottom: '10px', marginTop: '30px'}}>Frameworks</p>
                <p>React</p>
                <p>Node.js</p>
                <p>Flask</p>
                <p>Jest</p>
                <p>Mocha</p>
                <p>JUnit</p>
                <p>Cypress</p>
                <p>FastAPI</p>
                <p>Springboot</p>
                <p>Express</p>
            </motion.div>
            <motion.div className="developer_tools" variants={itemVariants}>
                <p style={{fontWeight: 'bold', paddingBottom: '10px', marginTop: '30px'}}>Developer Tools</p>
                <p>Git</p>
                <p>GitHub</p>
                <p>Linux</p>
                <p>Docker</p>
                <p>Amazon Web Services (AWS)</p>
                <p>Microsoft Azure</p>
                <p>Visual Studio Code</p>
                <p>IntelliJ IDEs</p>
                <p>OpenAPI/Swagger</p>
                <p>Postman</p>
            </motion.div>
            <motion.div className="libraries" variants={itemVariants}>
                <p style={{fontWeight: 'bold', paddingBottom: '10px', marginTop: '30px'}}>Libraries</p>
                <p>Chai</p>
                <p>MongooseJS</p>
                <p>Redux</p>
                <p>Pandas</p>
                <p>NumPy</p>
                <p>MaterialUI</p>
                <p>scikitlearn</p>
                <p>NLTK</p>
            </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};


