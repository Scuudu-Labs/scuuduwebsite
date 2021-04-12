import React from "react";
import "./OurStory.css";
import galleryImage1 from '../../assets/galleryImage1.png'
import galleryImage2 from '../../assets/galleryImage2.png'
import galleryImage3 from '../../assets/galleryImage3.png'
import galleryImage4 from '../../assets/galleryImage4.png'
import galleryImage5 from '../../assets/galleryImage5.png'
import galleryImage6 from '../../assets/galleryImage6.png'
import galleryImage7 from '../../assets/galleryImage7.png'
import galleryImage8 from '../../assets/galleryImage8.png'
import galleryImage9 from '../../assets/galleryImage9.png'
import galleryImage10 from '../../assets/galleryImage10.png'
import galleryImage11 from '../../assets/galleryImage11.png'
import galleryImage12 from '../../assets/galleryImage12.png'

class OurStory extends React.Component {
  render() {
    return (
      <div id='our-story-container'>
        <h1>Our Story</h1>
        <p>
          The startup which kicked off operations in 2019, dreams to change the
          Nigerian tech story for good through avant garde technologies.
          We started out in January 2020, with a mission to completely change the Nigerian tech space.
          Leveraging on a host of technology concepts such as Artificial Intelligence (AI), Machine Learning (ML), 
          Augmented Reality (AR), Virtual Reality (VR), Internet of Things (Iot), Game and Software Development, 
          as well as 3D modelling, we set out to bring real solutions to many of the problems we face on a daily basis.
        </p>
        <div id='our-story-image-galley'>
        <div>
            <img src={galleryImage1} alt='' />
            <img src={galleryImage2} alt='' />
            <img src={galleryImage3} alt='' />
            </div>
            <div id='center'>
            <img src={galleryImage4} alt='' />
            <img src={galleryImage5} alt='' />
            <img src={galleryImage6} alt='' />
            </div>
            <div>
            <img src={galleryImage7} alt='' />
            <img src={galleryImage8} alt='' />
            <img src={galleryImage9} alt='' />
            </div>
            <div id='center'>
            <img src={galleryImage10} alt='' />
            <img src={galleryImage11} alt='' />
            <img src={galleryImage12} alt='' />
            </div>
        </div>
      </div>
    );
  }
}

export default OurStory;
