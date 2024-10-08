import "./Projects.css";

import React from "react";
import { easeIn, motion, useAnimation } from "framer-motion";


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
          x: 100,
          opacity: 0
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            type: "tween",
            duration: 0.4,
          }
        },
    }

    const learnMoreButtonVariants = {
        initial: {
            x: -3,
            y: -3,
        },
        whileHover: { 
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }, 
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

    const buttonBackgroundStyle = {
        backgroundColor: 'orange',
        padding: '0px', // Adjust padding to control the size of the background
        borderRadius: '5px', // Optional: to match the button's border-radius if it has one
        display: 'inline-block', // Keeps the background size close to the button size
    }

    const handleButtonClick = (url, controls) => {
        // Start the "clicked" animation
        controls.start("clicked").then(() => {
            // After the animation completes, return to the "initial" state
            controls.start("initial");
        });

        // Open the URL
        window.open(url);
    }

    const controls = useAnimation();


    return (
        <div className="projects">
            <motion.div className="projects_subtitle" variants={cardVariants}>
                <p>projects</p>
            </motion.div>
            <div className="projects_content_list">
            <motion.div 
                className="projects_content" 
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="project_content_text" style={{ flex: 1 }}>
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>Soundscapes</p>
                    <p>Create and listen to custom audio environments. Built with Next.js, Tailwind CSS, and a few open-source React component libraries, and deployed on Vercel.</p>
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/soundscapes', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/soundscapes.jpeg`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://www.soundscapes.cloud/')}/>
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
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>RL Web</p>
                    <p>A website to document my approach and solutions to reinforcement learning projects. Build with Hugo, and deployed on GitHub pages.</p>
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/rl-web', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/rl-web.jpeg`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://srujanr40.github.io/rl-web/')}/>
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
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>Reinforcement Learning Mountain Car</p>
                    <p>Using Q-Learning to train an agent to quickly and optimally get a mountain car up a hill</p>
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/reinforcement-learning-mountain-car', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/mountaincar.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://github.com/srujanr40/reinforcement-learning-mountain-car')}/>
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
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>Reinforcement Learning Cartpole</p>
                    <p>Using Q-Learning to train an agent to balance a pole upright on a movable cart</p>
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/reinforcement-learning-cartpole', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/cartpole.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://github.com/srujanr40/reinforcement-learning-cartpole')}/>
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
                    <p style={{ fontSize: '120%', fontWeight: 'bold' }}>HappyHaiku</p>
                    <p>A bot built with Python, Pandas, and Flask that leverage NLTK to perform sentiment analysis, and generates haikus for positive comments</p>
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/happyhaiku', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/reddit.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://github.com/srujanr40/happyhaiku')}/>
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
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/dogfish', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/dogFish.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://github.com/srujanr40/dogfish')}/>
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
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/personal_website', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/logo-emoji.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://github.com/srujanr40/personal_website')}/>
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
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/CernSpaceClient', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/CernSpaceFlat.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://github.com/srujanr40/CernSpaceClient')}/>
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
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://github.com/srujanr40/CPSC210Project', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/lost.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://github.com/srujanr40/CPSC210Project')}/>
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
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://devpost.com/software/quarantoned', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/quarantoned.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://devpost.com/software/quarantoned')}/>
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
                    <div style={buttonBackgroundStyle}>
                        <motion.button className='learn_more_button' variants={learnMoreButtonVariants} initial='initial' animate={controls} whileHover='whileHover' onClick={() => handleButtonClick('https://devpost.com/software/quarantoned', controls)}>Learn More</motion.button>
                    </div>
                </div>
                <motion.div className="project_img" variants={imageVariants} whileHover='whileHover' whileTap='whileTap' dragConstraints= {imageVariants.dragConstraints} drag>
                    <img src={`${process.env.PUBLIC_URL}/hope.png`} alt="Project" onDragStart={(e) => e.preventDefault()} onClick={() => window.open('https://github.com/srujanr40/news-app')}/>
                </motion.div>
            </motion.div>
            </div>
        </div>
    );
}

