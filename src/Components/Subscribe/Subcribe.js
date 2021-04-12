import React, { useState } from "react";
import "./Subscribe.css";


const Subscribe = () => {
    // const [todos, setTodos] = useState(null);
    const [value, setValue] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      const data = { email_address: value };
      console.log('submit');
      console.log(value);
      fetch('https://scuudu-apis.herokuapp.com/astroworld/new-subscriber?APIKey=zdakcsdenkwrWQER12vevlewewfwrfwkfefe23134', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  
    function handleValue(e) {
      setValue(e.target.value);
    }
    return (
      <div id="subscribe-container">
        <div id="subscribe-bold-text">
          <h1>Let's stay in touch</h1>
        </div>
        <div className="subscribe-text">
          <p>
            By subscribing to our newsletter, you will join the list of those
            who are first to get the latest updates about our intriguing
            activities.
          </p>
          <form action="" onSubmit={handleSubmit}>
              <input id='email' type='text' placeholder='Email' onChange={handleValue} />
              <input id='submit' type='submit' value='Subscribe' />
          </form>
        </div>
      </div>
    );
}

export default Subscribe;
