import React from 'react';
import './ClientAndPatners.css';
import tenece from "../../assets/tenece.png"
import genesys from "../../assets/genesys.png"
import fsi from "../../assets/fsi.svg"
import sterling from "../../assets/sterling.png"

class ClientAndPatners extends React.Component {

    render() {
        return (
            <div className={`patners-container ${this.props.isGrey ? "greyBG" : ""}`}>
                <div className='patners-header'>
                    <h5>Clients & Partners</h5>
                    <h1>Trusted by Today's Top Brands</h1>
                </div>
                <div id='patners-logo-container'>
                    <img src={tenece} alt='' />
                    <img src={genesys} alt='' />
                    <img src={fsi} alt='' />
                    <img src={sterling} alt='' />
                </div>
            </div>
        )
    }
}

export default ClientAndPatners