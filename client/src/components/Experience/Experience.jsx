import "./Experience.css";
import { motion } from "framer-motion";

export default function Experience() {
    const cardVariants = {
        offscreen: {
          x:-100,
          opacity: 0
        },
        onscreen: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.5
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
            duration: 0.4
          }
        },
    }

    return (
        <motion.div className="experience">
            <motion.div 
                className="experience_subtitle"
                variants={cardVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <p>experience</p>
            </motion.div>
            <motion.div 
                className="experience_content"
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="experience_content_header">
                    <div className="experience_content_title">
                        <a href="https://lifebooster.ca">LifeBooster</a>
                    </div>
                    <div className="experience_content_date">
                        <p>May 2022 - December 2022</p>
                    </div>
                </div>
                <div className="experience_content_text">
                    <p>Co-op Software Developer in Test</p>
                </div>
            </motion.div>
            <motion.div 
                className="experience_content"
                variants={contentVariants}
                initial='offscreen'
                whileInView='onscreen'
                viewport={{ once: true }}
            >
                <div className="experience_content_header">
                    <div className="experience_content_title">
                        <a href="https://xgen.ai"> XGen AI</a>
                    </div>
                    <div className="experience_content_date">
                        <p>January 2021 - April 2021</p>
                    </div>
                </div>
                <div className="experience_content_text">
                    <p>Co-op Software Developer</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

