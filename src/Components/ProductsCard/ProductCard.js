import React from "react";
import './ProductCard.css';


class homeCard extends React.Component {
  render() {
    return (
      <div id='homeCard'>
        <img src={this.props.homeImage} alt="" />
        <h1>{this.props.homeName}</h1>
        <p>{this.props.homeDescription}</p>
      </div>
    );
  }
}

export default homeCard;
