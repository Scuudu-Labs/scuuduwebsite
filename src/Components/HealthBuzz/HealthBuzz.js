import React from 'react'
import './HealthBuzz.css'
import './responsiveness.css'
import heartbuzz from '../../assets/heartbuzz.svg'
import heartbuzzDemo from '../../assets/heartbuzzDemo.svg'
// import phonedemo2 from '../../assets/phone-demo2.svg'

const HealthBuzz = () => {
    return (
        <div id="health-buzz">
            <div id="health-buzz-header">
                <div id="health-buzz-logo">
                    <img src={heartbuzz}></img>
                       <p id="health-buzz-text">Heart Buzz</p>
                </div >
            </div>
            <div id="healthbuzz-note">
                Health Buzz - Using our application, vendors can efficiently manage their resources.
                Vendors can ascertain channels where sales boomed. They can also forecast future income.
                Also, our cardholders can view a breakdown of how they spent their money. This technology grants access to quality bookkeping services
            </div>
            <div id="heartbuzz-images">
                <img src={heartbuzzDemo}/>
            </div>
        </div>
    )
}

export default HealthBuzz;