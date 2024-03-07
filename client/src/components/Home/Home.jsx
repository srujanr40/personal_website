import React from "react";
import Intro from "../Intro/Intro";
import AboutMe from "../AboutMe/AboutMe";
import Technologies from "../Technologies/Technologies";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import "./Home.css"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div style={{ height: '10px' }}></div> {/* Empty space */}
            <Intro />
            <div style={{ height: '35em' }}></div> {/* Empty space */}
            <AboutMe />
            <div style={{ height: '25em' }}></div> {/* Empty space */}
            <Technologies />
            <div style={{ height: '25em' }}></div> {/* Empty space */}
            <Projects />
            <div style={{ height: '25em' }}></div> {/* Empty space */}
            <Experience />
            <div style={{ height: '20em' }}></div> {/* Empty space */}
            <Footer />
            <div style={{ height: '40px' }}></div> {/* Empty space */}
        </div>
    )
}