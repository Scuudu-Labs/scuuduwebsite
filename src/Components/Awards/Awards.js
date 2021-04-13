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
          Over a year of inception, Scuudu has been recognized and awarded by Forbes and Financial Services Innovator Association. We emerged Finalist in the Forbes First Nigerian Digital Accelerator Summit, 2020 and second runner-up for FSI hackathon, 2020.
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
