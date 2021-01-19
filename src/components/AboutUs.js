import React from 'react';
import aboutUsImg from '../Images/aboutUS.png'
import serviceImg from '../Images/service-printing.png'
import './AboutUs.css';
const AboutUs = () => {
    return (
        <div className="aboutUs-container">
            <section className="section aboutUs" id="about">
                <div className="wrapper">
                    <p className="title">
                        Kim jesteśmy ?
                    </p>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet architecto at autem commodi cum cupiditate eligendi enim exercitationem explicabo harum laborum maiores nihil nisi nulla odio quos rerum saepe sunt ullam velit veniam, vitae voluptas voluptatem voluptatum. Accusantium, aliquam expedita. Aliquid cupiditate dolores in laboriosam porro quaerat quos soluta.</p>
                    </div>
                </div>
                <div className="aboutUs-img">
                    <img className="aboutUsImage" src={serviceImg} alt="About-us" width="300" height="300"/>
                </div>

            </section>
            <section className="section service">
                <div className="service-img">
                    <img className="aboutUsImage" src={aboutUsImg} alt="About-us"  width="300" height="300"/>
                </div>
                <div className="wrapper">
                    <p className="title">
                        Rozwijamy się w różnych kategoriach
                    </p>
                    <div className='description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet architecto at autem commodi cum cupiditate eligendi enim exercitationem explicabo harum laborum maiores nihil nisi nulla odio quos rerum saepe sunt ullam velit veniam, vitae voluptas voluptatem voluptatum. Accusantium, aliquam expedita. Aliquid cupiditate dolores in laboriosam porro quaerat quos soluta.</p>

                    </div>
                </div>


            </section>


        </div>
    );
};

export default AboutUs;
