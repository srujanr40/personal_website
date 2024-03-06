import "./Projects.css";

import React from "react";
import { motion } from "framer-motion";


export default function Projects() {
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

    const contentVariants = {
        offscreen: {
          x: 300,
          opacity: 0
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            type: "spring",
            bounce: 0.4,
            duration: 1.5
          }
        },
    }

    const learnMoreButtonVariants = {
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.9
        }
    }

    const imageVariants = {
        whileHover: {
            scale: 1.1
        },
        whileTap: {
            scale: 0.9
        },
        dragConstraints: {
            top: -20,
            left: -20,
            right: 20,
            bottom: 20,
        }
    }

    return (
        <div className="projects">
            <motion.div drag className="projects_subtitle" variants={cardVariants}>
                <p>projects</p>
            </motion.div>
            <motion.div 
                drag
                className="projects_content" 
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="project_content_text" style={{ flex: 1 }}>
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>HappyHaiku</p>
                    <p>A bot built with Python, Pandas, and Flask that leverage NLTK to perform sentiment analysis, and generates haikus for positive comments</p>
                    <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' whileTap='whileTap'>Learn More</motion.button>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" alt="Project" onDragStart={(e) => e.preventDefault()}/>
                </motion.div>
            </motion.div>
            <motion.div 
                className="projects_content" 
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="project_content_text" style={{ flex: 1 }}>
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>dogFish</p>
                    <p>A comprehensive web application built on MongoDB, Express, React.js, and Node.js to connect players for casual sports games. Features a weighted search matchmaking algorithm, chat, email log in verification, and location preferences using the Google Maps API</p>
                    <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' whileTap='whileTap'>Learn More</motion.button>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" alt="Project" onDragStart={(e) => e.preventDefault()}/>
                </motion.div>
            </motion.div>
            <motion.div 
                className="projects_content" 
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="project_content_text" style={{ flex: 1 }}>
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>This Website!</p>
                    <p>Built using React, Node.js, and Framer Motion</p>
                    <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' whileTap='whileTap'>Learn More</motion.button>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" alt="Project" onDragStart={(e) => e.preventDefault()}/>
                </motion.div>
            </motion.div>
            <motion.div 
                className="projects_content" 
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="project_content_text" style={{ flex: 1 }}>
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>CernSpace Client</p>
                    <p>Clients built to allow users to engage in volunteer computing. Built as a project for CernFest. Web client built with HTML/CSS and desktop client built with Java and JavaFX</p>
                    <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' whileTap='whileTap'>Learn More</motion.button>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" alt="Project" onDragStart={(e) => e.preventDefault()}/>
                </motion.div>
            </motion.div>
            <motion.div 
                className="projects_content" 
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="project_content_text" style={{ flex: 1 }}>
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>Lost</p>
                    <p>A point-and-click adventure game built with Java and JavaFX for a software design course. Features user inventory and state management, and a save-and-load feature.</p>
                    <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' whileTap='whileTap'>Learn More</motion.button>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" alt="Project" onDragStart={(e) => e.preventDefault()}/>
                </motion.div>
            </motion.div>
            <motion.div 
                className="projects_content" 
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="project_content_text" style={{ flex: 1 }}>
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>Quarantoned</p>
                    <p>An Android application built using Java. Leverages TensorFlow Pose Estimation to measure form when doing strength training exercises and provide feedback.</p>
                    <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' whileTap='whileTap'>Learn More</motion.button>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" alt="Project" onDragStart={(e) => e.preventDefault()}/>
                </motion.div>
            </motion.div>
            <motion.div 
                className="projects_content" 
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="project_content_text" style={{ flex: 1 }}>
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>Hope</p>
                    <p>A web app built with Node.js and styled with HTML/CSS. Filters and displays positive news articles, and charities that do work close to the users location</p>
                    <motion.button className='learn_more_button' variants={learnMoreButtonVariants} whileHover='whileHover' whileTap='whileTap'>Learn More</motion.button>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg" alt="Project" onDragStart={(e) => e.preventDefault()}/>
                </motion.div>
            </motion.div>
        </div>
    );
}

