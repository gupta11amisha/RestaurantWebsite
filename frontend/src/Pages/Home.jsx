// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeroSection from '../components/HeroSection';
import About from '../components/About'; // Import the About component
import Qualities from '../components/Qualities';
import Menu from '../components/Menu'; // Import the Menu component
import WhoAreWe from '../components/WhoAreWe';
import Team from '../components/Team'; // Import the Team component
import Reservation from '../components/Reservation';
import Footer from '../components/Footer'; // Import the Footer component

const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <Qualities />
            <Menu />
            <WhoAreWe />
            <Team />
            <Reservation />
            <Footer /> {/* Include the Footer component */}
        </>
    );
}

export default Home;