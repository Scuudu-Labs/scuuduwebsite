import React from "react";
import "./MeetTheTeamGallery.css";
import frank from "../../assets/frank.png";
import kaosy from "../../assets/kaosy.png";
import emeka from "../../assets/emeka.png";
import chinedu from "../../assets/chinedu.png";
import joshua from "../../assets/joshua.png";

class MeetTheTeamGallery extends React.Component {
  render() {
    return (
      <div id="meet-the-team-gallery-container">
        <div id="meet-the-team-gallery-inner-container">


          <div id="team-member-card">
            <img src={frank} alt="" />
            <h1 id="name">
              <span id="firstName">Franklin</span> Osondu
            </h1>
            <p id="role">Lead, Research & Development</p>
            <div id="social-media-links">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          <div id="team-member-card">
            <img src={kaosy} alt="" />
            <h1 id="name">
              <span id="firstName">Kaosicho</span> Dim
            </h1>
            <p id="role">Visual Designer</p>
            <div id="social-media-links">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          <div id="team-member-card">
            <img src={emeka} alt="" />
            <h1 id="name">
              <span id="firstName">Emeka</span> Onyebuchi
            </h1>
            <p id="role">Machine Learning Engineer</p>
            <div id="social-media-links">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          <div id="team-member-card">
            <img src={chinedu} alt="" />
            <h1 id="name">
              <span id="firstName">Chinedu</span> Achimalo
            </h1>
            <p id="role">Software Developer</p>
            <div id="social-media-links">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

          <div id="team-member-card">
            <img src={joshua} alt="" />
            <h1 id="name">
              <span id="firstName">Joshua</span> Nwankwo
            </h1>
            <p id="role">Machine Learning Engineer</p>
            <div id="social-media-links">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default MeetTheTeamGallery;
