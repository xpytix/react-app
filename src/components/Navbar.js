import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Navbar.css';
import AboutUs from "./AboutUs";
import {Link} from "react-scroll";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link  activeClass="active"
                           to="hero"
                           spy={true}
                           smooth={true}
                           offset={-50}
                           duration={500}
                           className='navbar-logo'
                           onClick={closeMobileMenu}>
                        <h1>Centrum druku </h1> <i className="fas fa-palette"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="hero"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className='nav-links'
                                onClick={closeMobileMenu}>
                                Start
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                O nas
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                activeClass="active"
                                to="service"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Usługi
                            </Link>
                        </li>

                        <li>
                            <Link
                                activeClass="active"
                                to="contact-page"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' type="link">Kontakt</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
