import React from 'react';
import './Map.css';
// Initialize and add the map

const Map = () => {
    return (
        <div className="map-wrapper">
               <iframe id="map"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2536.7153058985746!2d20.522863115691774!3d50.52086379016973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717bf055a8bcd55%3A0x4ebd6c977cab7d13!2sCentrum%20Druku%2C%20Studio%20Fotograficzne!5e0!3m2!1spl!2spl!4v1611141682970!5m2!1spl!2spl"
                    allowFullScreen="" aria-hidden="false"
                   tabIndex="0"></iframe>
        </div>
    );
};

export default Map;
