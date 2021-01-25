import React from "react";
import "./ServicesCard.css";

const hardwareTags = ['Embedded Systems ', 'IoT ', '3D Printing ', 'Robotics']

const renderTag = hardwareTags.map((tag)=>{
    return(
        <span key={tag} id='tag'>{tag}</span>
    )
})

class ServicesCard extends React.Component {
  render(props) {
    return (
      <div id="servicesCard">
        <img src={this.props.src}  alt=''/>
        <h1>{this.props.heading}</h1>
        <p>{this.props.description}</p>
        <div id='tags'>
        {renderTag}
        </div>
      </div>
    );
  }
}

export default ServicesCard;
