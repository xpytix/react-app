import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Map from "./Map";

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contact-page" id="contact-page">
            <div className="contact">
                <h1 className="title"> Napisz do nas!</h1>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    <input placeholder={"Name"} type="text" name="user_name" />
                    <input placeholder={"Email"} type="email" name="user_email" />
                    <textarea placeholder={"Message"} name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div>

            <div className="map">
                <h1 className="title"> Znajdziesz nas tutaj:</h1>
                <Map/>
            </div>
        </div>

    );
}

