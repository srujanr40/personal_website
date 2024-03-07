import React from "react";
import Intro from "../Intro/Intro";
import AboutMe from "../AboutMe/AboutMe";
import Technologies from "../Technologies/Technologies";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Navbar from "../Navbar/Navbar";

import "./Home.css"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div style={{ height: '10px' }}></div> {/* Empty space */}
            <Intro />
            <div style={{ height: '500px' }}></div> {/* Empty space */}
            <AboutMe />
            <div style={{ height: '200px' }}></div> {/* Empty space */}
            <Technologies />
            <div style={{ height: '300px' }}></div> {/* Empty space */}
            <Projects />
            <div style={{ height: '300px' }}></div> {/* Empty space */}
            <Experience />
            <div style={{ height: '400px' }}></div> {/* Empty space */}
            
        </div>
    )
}