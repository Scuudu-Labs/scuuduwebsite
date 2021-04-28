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
                                <a href='/Services'>Services</a>
                            </li>
                            <li>
                                <a href='/Products'>Product</a>
                            </li>
                            <li>
                                <a href='/news'>News</a>
                            </li>
                            <li>
                                <a href='/career'>Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div id='footer-support'>
                        <ul>
                            <li>Support</li>
                            <li>
                                <a href='/FAQ'>FAQs</a>
                            </li>
                            <li>
                                <a href='/Download'>Downloads</a>
                            </li>
                            <li>
                                <a href='/Resources'>Resources</a>
                            </li>
                            <li>
                                <a href='/Help'>Help</a>
                            </li>
                        </ul>
                    </div>
                    <div id='footer-follow'>
                        <ul>
                            <li>Follow</li>
                            <li>
                            <a href="https://www.facebook.com/Scuudu-Labs-102626038152628">Facebook</a>                            </li>
                            <li>
                            <a href="https://twitter.com/Scuudu1">Twitter</a>                            </li>
                            <li>
                            <a href="https://www.youtube.com/channel/UCE7jVa4vScMfRPjnZlWrCkg">Youtube</a>                            </li>
                            <li>
                            <a href="https://www.instagram.com/scuudu">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div id='footer-contact-us'>

                        <ul>
                            <li>Contact Us</li>
                            <li>
                                <a href="mailt:hello@scuudu.com">info@scuudu.com</a>
                            </li>
                            <li>
                                <a href="tel:+234 (0)812 3456 789">+234 (0)812 345 6789</a>
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