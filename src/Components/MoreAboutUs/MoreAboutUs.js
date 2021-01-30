import React from "react";
import "./MoreAboutUs.css";

class MoreAboutUs extends React.Component {
  render() {
    return (
      <div id='more-about-us-container'>
        <div>
          <h1>Who We Are</h1>
          <p>
            Scuudu is a startup growing from Genesys Tech Hub’s Research and
            Development Lab. The startup which kicked off operations in 2019,
            dreams to change the Nigerian tech story for good through avant
            garde technologies. So far, Scuudu has worked on solutions
            leveraging Artificial Intelligence, Machine Learning, Augmented
            Reality and Virtual Reality. <br /> <br />Scuudu’s team is made up of the best
            collection of talent. A perfect blend of Engineers, designers,
            software and business developers who have acquired varying
            experience while working on top notch projects in different
            industries.
          </p>
        </div>
        <div>
          <h1>Vision</h1>
          <p>
            To create the most compelling narrative concerning innovation and
            creativity in the Nigerian space.{" "}
          </p>
        </div>
        <div>
          <h1>Mission</h1>
          <p>
            accelerate the production of indigenous technology. We understand
            the lack of R and D in the Nigerian Tech space and are willing to
            take on moonshot projects, in a bid to solve our local problems
            Improve local communities around us. We position ourselves to be
            role models for our community. We want African children to believe
            that their dreams are valid.{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default MoreAboutUs;
