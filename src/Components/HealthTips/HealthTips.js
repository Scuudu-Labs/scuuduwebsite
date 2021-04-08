import React from 'react'
import './HealthTips.css'
import './responsiveness.css'
import maskgroup from '../../assets/mask-group.svg'
import coverednose from '../../assets/covered-nose.svg'
import cleansurface from '../../assets/clean-surfaces.svg'
import maskgroup2 from '../../assets/mask-group2.svg'
import handwashing from '../../assets/wash-hands.svg'
import healthyeating from '../../assets/eat-healthy.svg'
import facetouching from '../../assets/face-touching.svg'
import sanitizer from '../../assets/sanitizer.svg'
import exercise from '../../assets/exercise.svg'
import home from '../../assets/home.svg'
const HealthTips = () => {
    return (
        <div id="health-tips">
            <div id="health-tips-text"><span>health</span> tips</div>
            <div id="health-tips-demo">
                {/* <img src={maskgroup} />
                <img src={home}/>
                <img src={cleansurface} />
                <img src={maskgroup2} />
                <img src={handwashing} />
                <img src={healthyeating} />
                <img src={facetouching} />
                <img src={sanitizer} />
                <img src={exercise} />
                <img src={coverednose} /> */}
                <div id="image">
                    <img src={maskgroup}/>
                </div>
                <div id="image">
                    <img src={coverednose}/>
                </div>
                <div id="image">
                    <img src={cleansurface}/>
                </div>
                <div id="image">
                    <img src={maskgroup2}/>
                </div>
                <div id="image">
                    <img src={handwashing}/>
                </div>
                <div id="image">
                    <img src={healthyeating}/>
                </div>
                <div id="image">
                    <img src={facetouching}/>
                </div>
                <div id="image">
                    <img src={sanitizer}/>
                </div>
                <div id="image">
                    <img src={exercise}/>
                </div>
                <div id="image">
                    <img src={home}/>
                </div>
                <p id="stay-safe-text">stay <span>safe!</span></p>
                </div>
            </div>
    )
}
export default HealthTips;