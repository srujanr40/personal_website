import React from "react";
import Intro from "../Intro/Intro";
import AboutMe from "../AboutMe/AboutMe";
import Technologies from "../Technologies/Technologies";
import { motion } from "framer-motion";

import "./Home.css"

export default function Home() {
    return (
        <div>
            <Intro />
            <div style={{ height: '500px' }}></div> {/* Empty space */}
            <AboutMe />
            <div style={{ height: '400px' }}></div> {/* Empty space */}
            <Technologies />
            <div style={{ height: '250px' }}></div> {/* Empty space */}
        </div>
    )
}