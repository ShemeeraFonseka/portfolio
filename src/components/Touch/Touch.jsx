import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import './Touch.css';

const Touch = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name,
            email,
            message
        };

        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual EmailJS IDs
        emailjs.send('service_vunoib8', 'template_v9unwf3', templateParams, 'soFQR3l3kCMKLYla3')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully');
            }, (error) => {
                console.error('FAILED...', error);
                alert('Failed to send email');
            });
    };

    return (
        <div className="touch-container" id="touch">
            <p className="touch-intro">CONTACT ME</p><br />

            <div className='contact-container'>


                <div className='contactl'>
                    <form className="email-form" onSubmit={handleSubmit}>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className="input-field"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <textarea
                            className="text-field"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea><br />
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>

                <div className='contactr'>
                    <p>
                        <SiGmail size={30} style={{ marginRight: '30px' }} />
                        <a href="mailto:shemeeraFonseka@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color:'#ffff'}}>
                            shemeerafonseka@gmail.com
                        </a>
                    </p>

                    <p>
                        <FaPhoneAlt size={30} style={{ marginRight: '30px' }} />
                        <a href="tel:+94741985282" style={{ color:'#ffff'}}>
                            +9474 198 5282
                        </a>
                    </p>

                    <p>
                        <FaLinkedin size={30} style={{ marginRight: '30px' }} />
                        <a href="https://www.linkedin.com/in/shemeera-fonseka" target="_blank" rel="noopener noreferrer" style={{ color:'#ffff'}}>
                            www.linkedin.com/in/shemeera-fonseka
                        </a>
                    </p>

                    <p>
                        <FaLocationDot size={30} style={{ marginRight: '30px' }} />
                        Colombo, Sri Lanka
                    </p>
                </div>

            </div>


        </div>
    );
};

export default Touch;
