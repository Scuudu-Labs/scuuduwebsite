import React from "react";
import Subscribe from "../../Components/Subscribe/Subcribe";
import LatestProduct from "../../Components/LatestProducts/LatestProducts";
import HomePageBanner from "../../Components/HomePageBanner/HomePageBanner";
import WhoWeAre from "../../Components/WhoWeAre/WhoWeAre";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import ClientAndPatners from "../../Components/ClientsAndPatners/ClientAndPatners";
import TopHeader from "../../Components/TopHeader/TopHeader";

class OchembaEnuguTickets extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        <NavBar />
        <Footer />
      </div>
    );
  }
}

export default OchembaEnuguTickets;