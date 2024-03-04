import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';

import './App.css'
import './fonts/vcr.ttf'
import Home from './components/Home/Home'
import About from './components/About/About'

function App() {
  const [introDone, setIntroDone] = useState(false);
    const [textDone, setTextDone] = useState(false);

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setTextDone(true);
        }, 13500);
        const introTimer = setTimeout(() => {
            setIntroDone(true);
        }, 17500);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(introTimer);
        };
    }, []);

    useEffect(() => {
        if (textDone) {
            // This effect is now handled by CSS for smooth transition
        }
    }, [textDone]);

  return (
    <div className='crt' onClick={() => setIntroDone(true)}>
    {!introDone && (
        <motion.div className={`intro ${textDone ? 'start' : ''}`} key = 'intro'>
            <TypeAnimation
                cursor={true}
                sequence={[
                    "HEY STRANGER!",
                    1000,
                    "IT'S GREAT TO HAVE YOU HERE",
                    1000,
                    "FEEL FREE TO BROWSE AROUND!",
                ]}
                wrapper='h1'
                speed={0.5}
                repeat={0}
            />
        </motion.div>
    )}
    {introDone && (
        <Router>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    )}
    </div>
  );
}

export default App;
