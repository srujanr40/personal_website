import "./Email.css";
import { motion } from "framer-motion";

export default function Email() {
    const highlightAnimation = {
        initial: {
            scaleY: 0,
        },
        hover: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    }

    const handleClick = () => {
        const email = 'mailto:srujanr40@gmail.com';
        window.location.href = email;
    }


    return (
        <div className = 'intro_text'>
            <p>
                {"Contact me: \u00A0"}
            </p>
            <motion.div className='email' initial="initial" whileHover="hover">
                <p onClick={handleClick}>
                    srujanr40@gmail.com
                </p>
                {/* Background highlight element */}
                <motion.div className="highlight" variants={highlightAnimation} />
            </motion.div>
        </div>
    );
};

