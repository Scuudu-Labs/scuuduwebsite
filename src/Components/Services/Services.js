import React from "react";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";
import servicesData from "./services.json";

class Services extends React.Component {
  render() {
    return (
      <div id="services-container">
        <div id="services-inner-container">
          <div id="services-header">
            <h1>Our Services</h1>
          </div>
          <div id="services-card-container">
            {servicesData.map(
              ({ name, description, blackIcon, tags, whiteIcon }) => (
                <ServicesCard
                  heading={name}
                  icon={blackIcon}
                  hoverIcon={whiteIcon}
                  description={description}
                  tags={tags}
                />
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
