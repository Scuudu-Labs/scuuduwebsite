import React from 'react';
import './Login.css';

const LoginPage = () => {
  return (
    <div className="login-section">
        <div className="login-container">
            <div className="logo-section">
                <img src="/ochemba-shield.webp" alt="Ochemba Enugu" className="logo" />
            </div>
            <h2>Hello, welcome back</h2>
            <div className="form-section">
                <div className="tabs">
                <span className="active">Login</span>
                <span>Sign Up</span>
                </div>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="********" />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
      </div>
    </div>
  );
};

export default LoginPage;