import React from 'react';
import './Footer.css';
import { Button } from './Button';


function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <a to='/sign-up'>How it works</a>
                        <a to='/'>Testimonials</a>
                        <a to='/'>Careers</a>
                        <a to='/'>Investors</a>
                        <a to='/'>Terms of Service</a>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <a to='/'>Contact</a>
                        <a to='/'>Support</a>
                        <a to='/'>Destinations</a>
                        <a to='/'>Sponsorships</a>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <a to='/'>Submit Video</a>
                        <a to='/'>Ambassadors</a>
                        <a to='/'>Agency</a>
                        <a to='/'>Influencer</a>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a to='/'>Instagram</a>
                        <a to='/'>Facebook</a>
                        <a to='/'>Youtube</a>
                        <a to='/'>Twitter</a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <a to='/' className='social-logo'>
                            <i className="fas fa-palette"> </i>
                        </a>
                    </div>
                    <small class='website-rights'>  Centrum druku © 2020</small>
                    <div class='social-icons'>
                        <a
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </a>
                        <a
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </a>
                        <a
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i class='fab fa-youtube' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </a>
                        <a
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i class='fab fa-linkedin' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
