import './Home.css'
import { useState, useEffect } from 'react'; // Import useEffect
import { TypeAnimation } from 'react-type-animation';
import NavigationBar from '../NavigationBar/NavigationBar';

export default function Home () {
    const [introDone, setIntroDone] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroDone(true);
        }, 18000); // Set a timer for 20 seconds

        return () => clearTimeout(timer); // Cleanup the timer
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className='crt' onClick={() => setIntroDone(true)}>
            {!introDone && ( // Only render this div if introDone is false
                <div className='intro'>
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            "HEY STRANGER!",
                            1000,
                            "IT'S GREAT TO HAVE YOU HERE",
                            1000,
                            "FEEL FREE TO BROWSE AROUND!",
                            1000,
                            ""
                        ]}
                        wrapper='h1'
                        speed = {0.5}
                        repeat = {0}
                    />
                </div>
            )}
            {introDone && ( // Only render this div if introDone is true
                <div className='landingPage'>
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            "WELCOME!"
                        ]}
                        wrapper='h1'
                        speed = {1}
                        repeat = {0}
                    />
                    <NavigationBar />
                </div>
            )}
        </div>
    )
}

