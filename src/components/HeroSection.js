import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video1 from '../videos/printing.mp4'
function HeroSection() {
    return (
        <div className='hero-container'>
            <video playsInline autoPlay loop muted >
                <source src={video1}  type='video/mp4'/>
            </video>
            <h1>DZIAŁAJ Z NAMI </h1>
            <p>Na co czekasz? </p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Zadzwoń już teraz!
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    Dołącz do nas! <i className="fab fa-facebook"/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection;
