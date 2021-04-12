import React from "react";
import "./ProductsPreviewCard.css";

class ProductsPreviewCard extends React.Component {
  constructor(props) {
    super(props);

    this.ImageRef = React.createRef();

    this.state = {
      spans: 0,
    };
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    const height = this.ImageRef.current.clientHeight;

    const spans = Math.ceil(height / 60);

    this.setState({ spans: spans });

    // console.log(this.ImageRef.current.clientHeight);
  };

  render() {
    return (
      <div
        id="product-preview-card-container"
        style={{ gridRow: `span ${this.state.spans}` }}
      >
        <img ref={this.ImageRef} src={this.props.productImage} alt="" />
        <h2>{this.props.productName}</h2>
        <p>{this.props.productDescription}</p>
      </div>
    );
  }
}

export default ProductsPreviewCard;
