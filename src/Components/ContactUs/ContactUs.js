import React from 'react';
import './ContactUs.css';

class ContactUs extends React.Component{
    render(){
        return(
            <div id='contact-us-wrapper'>
                <div className='contact-us-header'>
                    <h1>Got a project for us?</h1>
                </div>
                <div className='form-container'>
                    <div id='form-inner-container'>
                    <form>
                        <input type='text' placeholder='Name' />
                        <input type='email' placeholder='Email' />
                        <input type='phone' placeholder='Phone' />
                        <textarea id='contact-us-text-area' placeholder='Briefly tell us about your project' />
                        <input id='contact-us-form-button' type='submit' placeholder='Submit' />
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs