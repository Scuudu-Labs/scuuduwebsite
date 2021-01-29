import React from "react";
import NavBar from "./Components/NavBar/NavBar";
// import logo from '../src/assets/text-logo.png'
// import TopHeader from "./Components/TopHeader/TopHeader";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import Subscribe from "./Components/Subscribe/Subcribe";
import Footer from "./Components/Footer/Footer";
import AboutUsBanner from "./Components/AboutUsBanner/AboutUsBanner";
import OurStory from "./Components/OurStory/OurStory";

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        {/* <TopHeader /> */}
        {/* <NavBar logo={logo}/> */}
        <AboutUsBanner />
        <WhoWeAre pad='0px 0px'/>
        <OurStory />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default AboutUs;
