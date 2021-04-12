import React from "react";
import "./ServicesCard.css";

const renderTag = (tags) =>
  tags.map((tag) => (
    <span key={tag} id="tag">
      {tag}
    </span>
  ));

class ServicesCard extends React.Component {
  state = {
    hover: false,
  };
  render(props) {
    const icon = this.state.hover ? this.props.hoverIcon : this.props.icon;
    return (
      <div
        id="servicesCard"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <img src={icon} alt="" />
        <h1>{this.props.heading}</h1>
        <p>{this.props.description}</p>
        <div id="tags">{renderTag(this.props.tags)}</div>
      </div>
    );
  }
}

export default ServicesCard;
