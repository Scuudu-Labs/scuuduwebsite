import React from "react";
import Subscribe from "../../../Components/Subscribe/Subcribe";
import LatestProduct from "../../../Components/LatestProducts/LatestProducts";
import HomePageBanner from "../../../Components/HomePageBanner/HomePageBanner";
import WhoWeAre from "../../../Components/WhoWeAre/WhoWeAre";
import NavBar from "../../../Components/NavBar/NavBar";
import BuyTickets from "./BuyTickets/BuyTickets";
import EventDetails from "./EventDetails/EventDetails";
import Header from "./Header/Header";
import FirstHero from "./FirstHero/FirstHero";
import SpecialThanks from "./SpecialThanks/SpecialThanks";
import Footer from "./Footer/Footer";
// import Footer from "../../../Components/Footer/Footer";
import ClientAndPatners from "../../../Components/ClientsAndPatners/ClientAndPatners";
import TopHeader from "../../../Components/TopHeader/TopHeader";

class OchembaEnuguTickets extends React.Component {
  render() {
    return (
      <div>
        {/* <TopHeader />
        <NavBar /> */}
        <Header />
        <FirstHero />
        <EventDetails />
        <BuyTickets />
        <SpecialThanks />
        <Footer />
      </div>
    );
  }
}

export default OchembaEnuguTickets;