import React from 'react'
import './SocialDistancing.css'
import './responsiveness.css'
import demo from '../../assets/demo.svg'
import mobileDemo from '../../assets/mobileDemo.svg'


const SocialDistancing = () => {
    return (
        <div id="social-distancing">
            <div id="social-distancing-demo">
                <img src={demo} />
            </div>
            <div id="social-distancing-details">
                <text id="social-distancing-details-header"> Social Distancing</text>
                <text id="social-distancing-info">Your location will used to calculate the distance between users to provide safe spaces for you</text>
            </div>
            <div id="mobile-social-distancing-demo">
                <img src={mobileDemo}/>
            </div>
        </div>
    )
}

export default SocialDistancing;