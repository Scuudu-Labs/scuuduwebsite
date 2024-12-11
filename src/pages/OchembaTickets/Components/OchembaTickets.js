import React from "react";
import BuyTickets from "./BuyTickets/BuyTickets";
import EventDetails from "./EventDetails/EventDetails";
import Header from "./Header/Header";
import FirstHero from "./FirstHero/FirstHero";
import SpecialThanks from "./SpecialThanks/SpecialThanks";
import Footer from "./Footer/Footer";

class OchembaEnuguTickets extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <FirstHero />
        <EventDetails />
        <BuyTickets />
        <SpecialThanks />
        <Footer useAbsolute={false} />
      </div>
    );
  }
}

export default OchembaEnuguTickets;