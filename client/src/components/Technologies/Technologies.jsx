import React from "react";
import { motion } from "framer-motion";

import "./Technologies.css";


export default function Technologies() {
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
    <div>
      <motion.div
        className='technologies'
        variants={cardVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: true }}
      >
        <div className="technologies_subtitle">
            <p>technologies</p>
        </div>
        <div className="technologies_list">
            <motion.div className="languages">
                <p style={{fontWeight: 'bold', color: '#3d3d3d', paddingBottom: '10px'}}>Languages</p>
                <p>C</p>
                <p>Java</p>
                <p>Python</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>SQL</p>
                <p>HTML/CSS</p>
            </motion.div>
            <motion.div className="frameworks">
                <p style={{fontWeight: 'bold', color: '#3d3d3d', paddingBottom: '10px'}}>Frameworks</p>
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
            <motion.div className="developer_tools">
                <p style={{fontWeight: 'bold', color: '#3d3d3d', paddingBottom: '10px'}}>Developer Tools</p>
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
            <motion.div className="libraries">
                <p style={{fontWeight: 'bold', color: '#3d3d3d', paddingBottom: '10px'}}>Libraries</p>
                <p>Chai</p>
                <p>MongooseJS</p>
                <p>Redux</p>
                <p>MaterialUI</p>
                <p>scikitlearn</p>
                <p>NLTK</p>
            </motion.div>
        </div>
      </motion.div>
    </div>
  );
};


