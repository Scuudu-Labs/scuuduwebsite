import React from "react";
import './LatestProducts.css'
import ProductCard from "../ProductsCard/ProductCard";
import greenCard from '../../assets/green-rec.png';
import ashCard from '../../assets/ash-rec.png';
import yelloward from '../../assets/yellow-rec.png';
import tickAsh from '../../assets/tick-ash-rec.png';

class LatestProducts extends React.Component {
  render() {
    return (
      <div id="latest-home-container">
        <div id='inner-container'>
        <h1>Latest Products</h1>
        <p>
          We are designers, developers, writers, thinkers, and problem solvers.
          Small enough to be simple and fast, but big enough to deliver your
          project scope at the pace you need.
        </p>
        <div id='home-cards-container'>
        <ProductCard homeImage={greenCard} homeName='Project 1' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={ashCard} homeName='Project 2' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={yelloward} homeName='Project 3' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={tickAsh} homeName='Project 4' homeDescription='A short description about the project 1' />
        </div>
        </div>
      </div>
    );
  }
}

export default LatestProducts;
