import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

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
            <p className="touch-intro">GET IN TOUCH</p><br />
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
                ></textarea>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
};

export default Touch;
