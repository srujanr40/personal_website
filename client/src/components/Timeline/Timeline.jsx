import "./Timeline.css";
import { motion } from "framer-motion";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      }
    }
}

export default function Timeline() {
    return (
        <motion.div className="timeline_div">
            <motion.svg
                width="600"
                height="600"
                viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
            >
            <motion.line 
                className= 'timeline_line'
                x1="30"
                y1="30"
                x2="30"
                y2="500"
                stroke="#ffffff"
                variants={draw}
                custom={2}
            />

        </motion.svg>
    </motion.div>
    )
}