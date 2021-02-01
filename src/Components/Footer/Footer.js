import React from 'react';
import './Footer.css'

class Footer extends React.Component{
    render(){
        return(
            <div id='footer-container'>
                <div id='links-container'>
                <div id='footer-nav-link-container'>
                    <div id='footer-company'>
                        <ul>
                            <li>Company</li>
                            <li>
                                <a href='/'>Services</a>
                            </li>
                            <li>
                                <a href='/'>Product</a>
                            </li>
                            <li>
                                <a href='/'>News</a>
                            </li>
                            <li>
                                <a href='/'>Career</a>
                            </li>
                        </ul>
                    </div>
                    <div id='footer-support'>
                        <ul>
                            <li>Support</li>
                            <li>
                                <a href='/'>FAQs</a>
                            </li>
                            <li>
                                <a href='/'>Downloads</a>
                            </li>
                            <li>
                                <a href='/'>Resources</a>
                            </li>
                            <li>
                                <a href='/'>Help</a>
                            </li>
                        </ul>
                    </div>
                    <div id='footer-follow'>
                        <ul>
                            <li>Follow</li>
                            <li>
                                <a href='/'>Facebook</a>
                            </li>
                            <li>
                                <a href='/'>Instagram</a>
                            </li>
                            <li>
                                <a href='/'>Twitter</a>
                            </li>
                            <li>
                                <a href='/'>LinkeIn</a>
                            </li>
                        </ul>
                    </div>
                    <div id='footer-contact-us'>

                        <ul>
                            <li>Contact Us</li>
                            <li>
                                <a href='/'>info@scuudu.com</a>
                            </li>
                            <li>
                                <a href='/'>+234 (0)812 345 6789</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id='privacy-policy-container'>
                    <div id='privacy-polict-wrapper'>
                    <a href='/'>Terms of Service</a>
                    <a href='/'>Privacy Policy</a>
                    <a href='/'>Site Map</a>
                    </div>
                    <select>
                        <option>English</option>
                        <option>French</option>
                        <option>German</option>
                    </select>
                </div>
                </div>
                {/* <div id='back-to-top-button'></div> */}
                <div id='right-reserved'>© 2021 Scuudu Labs. All Rights Reserved.</div>
            </div>
        )
    }
}

export default Footer