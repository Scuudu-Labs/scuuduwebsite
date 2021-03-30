import React from "react";
import "./Awards.css";
import forbes from '../../assets/forbes.png'
import fsiFinals from '../../assets/fsiFinals.png'

class Awards extends React.Component {
  render() {
    return(
      <div id='awards-container'>
        <div id='awards-inner-container'>
          <h1>Awards & Recognitions</h1>
          <p>
            We have been working on a variety of projects and across different
            industries across disciplines, making our work an appropriate,
            versatile and functional response to the unique needs of our
            clients. Our capabilities cover the following areas;
          </p>
        <div id='award-image-con'>
        <div id='award-image'>
            <img src={forbes} alt=""/>
            <p>2020. Forbes Nigeria Summit Finalist</p>
          </div>
          <div id='award-image'>
            <img src={fsiFinals} alt=""/>
            <p>2020. FSI Hackathon 2nd Runner-up</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Awards;
