import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from "../Card";
import Footer from "../Footer";
import AboutUs from "../AboutUs";
import Contact from "../Contact";


function Home() {
    return (
        <>
            <HeroSection />
            <AboutUs/>
            <Cards/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Home;
