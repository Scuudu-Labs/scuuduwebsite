import React from "react";
import "./ProductBanner.css";
import productBox from "../../assets/productsBox.svg";

class ProductBanner extends React.Component {
  render() {
    return (
      <div id="product-banner-container">
        <div id="inner-container">
          <img src={productBox} alt="" />
          <h1>Featured Projects</h1>
          <p>
            We have been working on a variety of projects and across different
            industries across disciplines, making our work an appropriate,
            versatile and functional response to the unique needs of our
            clients.
          </p>
        </div>
      </div>
    );
  }
}

export default ProductBanner;
