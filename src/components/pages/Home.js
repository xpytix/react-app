import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from "../Card";
import Footer from "../Footer";
import AboutUs from "../AboutUs";


function Home() {
    return (
        <>
            <HeroSection />
            <AboutUs/>
            <Cards/>

            <Footer/>
        </>
    );
}

export default Home;
