import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import hardware from "../../assets/icons/hardware.svg";
import deeptech from "../../assets/icons/deeptechnology.svg";
import software from "../../assets/icons/software.svg";
import contentCreation from "../../assets/icons/content-creation.svg";
import productDesign from "../../assets/icons/product-design.svg";
import research from "../../assets/icons/research.svg";
import game from "../../assets/icons/game.svg";
import webdev from "../../assets/icons/webdev.svg";
import branding from "../../assets/icons/branding.svg";
import "./Services.css";

class Services extends React.Component {
  render() {
    return (
      <div id="services-container">
        <div id="services-header">
          <h1>Our Services</h1>
        </div>
        <div id="services-card-container">
          <ServicesCard
            heading="Hardware Development"
            src={hardware}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
          <ServicesCard
            heading="Deep Technology"
            src={deeptech}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
          <ServicesCard
            heading="Software Development"
            src={software}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
          <ServicesCard
            heading="Content Creation"
            src={contentCreation}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
          <ServicesCard
            heading="Product Design"
            src={productDesign}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
          <ServicesCard
            heading="Data Analysis, Research & Consultancy"
            src={research}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
          <ServicesCard
            heading="Game Development"
            src={game}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
          <ServicesCard
            heading="Web Development"
            src={webdev}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
          <ServicesCard
            heading="Branding"
            src={branding}
            description="The startup which kicked off operations in 2019, dreams to change the Nigerian tech story for good through avant garde technologies."
          />
        </div>
      </div>
    );
  }
}

export default Services;
