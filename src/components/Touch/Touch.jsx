import React, { useState } from 'react';
import emailjs from 'emailjs-com';
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

        emailjs.send('service_vunoib8', 'template_v9unwf3', templateParams, 'soFQR3l3kCMKLYla3')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Email sent successfully');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                console.error('FAILED...', error);
                alert('Failed to send email');
            });
    };

    return (
        <div className="touch-container" id="touch">
            <p className="touch-intro">CONTACT ME</p>

            <div className='contact-container'>
                <div className='contact-left'>
                    <form className="email-form" onSubmit={handleSubmit}>
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            className="input-field"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            className="text-field"
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>

                <div className='contact-right'>
                    <div className="contact-item">
                        <SiGmail className="contact-icon" size={30} />
                        <a href="mailto:shemeeraFonseka@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                            shemeerafonseka@gmail.com
                        </a>
                    </div>

                    <div className="contact-item">
                        <FaPhoneAlt className="contact-icon" size={30} />
                        <a href="tel:+94741985282" className="contact-link">
                            +9474 198 5282
                        </a>
                    </div>

                    <div className="contact-item">
                        <FaLinkedin className="contact-icon" size={30} />
                        <a href="https://www.linkedin.com/in/shemeera-fonseka" target="_blank" rel="noopener noreferrer" className="contact-link">
                            www.linkedin.com/in/shemeera-fonseka
                        </a>
                    </div>

                    <div className="contact-item">
                        <FaLocationDot className="contact-icon" size={30} />
                        <span className="contact-text">Colombo, Sri Lanka</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Touch;