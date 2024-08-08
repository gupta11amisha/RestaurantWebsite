// HeroSection.jsx
import React from 'react';
import Navbar from './Navbar';  // Make sure the path is correct
import '../App.css';  // Ensure correct path to your CSS file

const HeroSection = () => {
    return (
        <section className='heroSection' id="heroSection">
            <Navbar />
            <div className="container">
                <div className="banner">
                    <div className="largerBox">
                        <h1 className='title'></h1>
                    </div>
                    <div className="combined_boxes">
                        <div className="imageBox">
                            
                        </div>
                        <div className="textAndLogo">
                            <div className="textWithSvg">
                                <h1 className="title"></h1>
                                <h1 className="title Dishes_title"></h1>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="imageBox">
                        
                    </div>
                    <h1 className="title Dishes_title"></h1>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;