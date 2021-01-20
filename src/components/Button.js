
import React from 'react';
import './Button.css';
import {Link} from "react-scroll";


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize
                       }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <a className='btn-mobile'>
            {
                type ==="link" ? <Link  className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                                        activeClass="active"
                                        to="contact-page"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500} >
                    {children}
                </Link> :
                    <button
                        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                        onClick={onClick}
                        type={type}
                    >
                        {children}
                    </button>
            }

        </a>
    );
};
