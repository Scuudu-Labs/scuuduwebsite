import React from 'react'
import './DownloadDetails.css'
import './responsiveness.css'
import google from '../../assets/google-download.svg'
import texture from '../../assets/Vectary texture.svg'

const DownloadDetails = () => {
    return (
        <div id="download-details">
            <div id="download-details-google">
                <div id="safe-space-logo"><span>Safe</span>Space</div>
                <div id="logo-text">the social distancing app</div>
                <div id="download-text">Download now!</div>
                <img src={google} />
            </div>
            <div id="mobile-download-details">
                <img src={texture} />
            </div>
        </div>
    )
}
export default DownloadDetails;