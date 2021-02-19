import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [project, setProject] = useState('');
    function handleSubmit(e) {
      e.preventDefault();
      const data = { 
          email_address: email,
          name: name,
          phone: phone,
          project_desc: project
         };
      console.log('submit');
      console.log(data);
      fetch('https://scuudu-apis.herokuapp.com/astroworld/new-contact?APIKey=zdakcsdenkwrWQER12vevlewewfwrfwkfefe23134', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  
    function handleName(e) {
      setName(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
      }
      function handlePhone(e) {
        setPhone(e.target.value);
      }
      function handleProject(e) {
        setProject(e.target.value);
      }
        return(
            <div id='contact-us-wrapper'>
                <div className='contact-us-header'>
                    <h1>Got a project for us?</h1>
                </div>
                <div className='form-container'>
                    <div id='form-inner-container'>
                    <form action="" onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' onChange={handleName} />
                        <input type='email' placeholder='Email' onChange={handleEmail} />
                        <input type='phone' placeholder='Phone' onChange={handlePhone}/>
                        <textarea id='contact-us-text-area' placeholder='Briefly tell us about your project' onChange={handleProject} />
                        <input id='contact-us-form-button' type='submit' placeholder='Submit' />
                    </form>
                    </div>
                </div>
            </div>
        )
}

export default ContactUs