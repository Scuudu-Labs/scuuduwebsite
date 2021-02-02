import React from "react";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import TopHeader from "./Components/TopHeader/TopHeader";
import Subscribe from "./Components/Subscribe/Subcribe";
import logo from "./assets/logo.svg";
import LatestProduct from "./Components/LatestProducts/LatestProducts";
import HomePageBanner from "./Components/HomePageBanner/HomePageBanner";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        <NavBar logo={logo} />
        <HomePageBanner />
        <LatestProduct />
        <WhoWeAre
          text="Who We Are"
          description="We are designers, developers, writers, thinkers, and problem solvers.
          Small enough to be simple and fast, but big enough to deliver your
          project scope at the pace you need."
          pad='50px 0px'
        />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
