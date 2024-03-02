import React from 'react';
import './NavigationBar.css'; // Import your CSS file for navigation bar styling

function NavigationBar() {
    return (
        <div className="navbar">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
        </div>
    );
}

export default NavigationBar;