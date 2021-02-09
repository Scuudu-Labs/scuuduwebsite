import React from "react";
import Subscribe from "./Components/Subscribe/Subcribe";
import LatestProduct from "./Components/LatestProducts/LatestProducts";
import HomePageBanner from "./Components/HomePageBanner/HomePageBanner";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import ClientAndPatners from "./Components/ClientsAndPatners/ClientAndPatners";
import TopHeader from "./Components/TopHeader/TopHeader";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        <NavBar />
        <HomePageBanner />
        <WhoWeAre
          text="Who We Are"
          description="We are designers, developers, writers, thinkers, and problem solvers.
          Small enough to be simple and fast, but big enough to deliver your
          project scope at the pace you need."
          pad='50px 0px'
        />
          <LatestProduct />
          <ClientAndPatners />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
