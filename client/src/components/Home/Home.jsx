import React from "react";
import Intro from "../Intro/Intro";
import AboutMe from "../AboutMe/AboutMe";

import "./Home.css"

export default function Home() {
    return (
        <div>
            <Intro />
            <div style={{ height: '500px' }}></div> {/* Empty space */}
            <AboutMe />
            <div style={{ height: '500px' }}></div> {/* Empty space */}
        </div>
    )
}