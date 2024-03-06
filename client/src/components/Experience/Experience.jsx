import "./Experience.css";
import { motion } from "framer-motion";

export default function Experience() {
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
            type: "spring",
            bounce: 0.4,
            duration: 1.5
          }
        }
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
                        <p>LifeBooster</p>
                    </div>
                    <div className="experience_content_date">
                        <p>September 2021 - December 2021</p>
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
                        <p>XGen AI</p>
                    </div>
                    <div className="experience_content_date">
                        <p>September 2021 - December 2021</p>
                    </div>
                </div>
                <div className="experience_content_text">
                    <p>Co-op Software Developer</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

