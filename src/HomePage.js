import React from "react";
import Subscribe from "./Components/Subscribe/Subcribe";
import LatestProduct from "./Components/LatestProducts/LatestProducts";
import HomePageBanner from "./Components/HomePageBanner/HomePageBanner";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";

class HomePage extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default HomePage;
