import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [project, setProject] = useState('');

    function encodeMailtoData(data) {
        return Object.entries(data).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&');
    }

    function handleSubmit(e) {
        e.preventDefault();
        const data = { 
            subject: `New Project from ${name}`,
            body: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Description: ${project}`
        };
        window.location.href = `mailto:hello@scuudu.com?${encodeMailtoData(data)}`;
    }

    return(
        <div id='contact-us-wrapper'>
            <div className='contact-us-header'>
                <h1>Got a project for us?</h1>
            </div>
            <div className='form-container'>
                <div id='form-inner-container'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' onChange={e => setName(e.target.value)} />
                        <input type='email' placeholder='Email' onChange={e => setEmail(e.target.value)} />
                        <input type='tel' placeholder='Phone' onChange={e => setPhone(e.target.value)}/>
                        <textarea id='contact-us-text-area' placeholder='Briefly tell us about your project' onChange={e => setProject(e.target.value)} />
                        <input id='contact-us-form-button' type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;
