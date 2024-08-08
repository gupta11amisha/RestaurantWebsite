// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import '../App.css'; // Make sure to import your CSS

const About = () => {
    return (
        <section className='about' id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>Feel Your Crispyness in One Bite.</p>
                    </div>
                    <p className="mid">
                    At our restaurant, we are passionate about delivering the most exhilarating flavors through our unique and delicious dishes. Our commitment is to provide an unforgettable culinary experience that leaves our customers coming back for more.
                    </p>
                    <Link to={"/"} className="explore-link">
                        Explore Your Mood 
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/PIC.png" alt="about" />
                </div>
            </div>
        </section>
    );
}

export default About;