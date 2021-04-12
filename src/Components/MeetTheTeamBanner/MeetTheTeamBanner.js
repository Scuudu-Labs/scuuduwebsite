import React from "react";
import "./MeetTheTeamBanner.css";
import magicLogo from '../../assets/magic-logo.svg'

class MeetTheTeamBanner extends React.Component {
  render() {
    return (
      <div id='meet-the-team-banner'>
          <div id='inner-container'>
          <div id='meet-the-team-text'>
          <h1>
            #weMake<span id='green'>Magic</span>
          </h1>
          <p>
            The startup which kicked off operations in 2019, dreams to change
            the Nigerian tech story for good through avant garde technologies.
          </p>
        </div>
        <div id='meet-the-team-logo'>
          <img src={magicLogo} alt="scuudu magic logo" />
        </div>
          </div>
      </div>
    );
  }
}

export default MeetTheTeamBanner;
