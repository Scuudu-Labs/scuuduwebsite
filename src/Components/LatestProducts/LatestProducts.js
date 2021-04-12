import React from "react";
import './LatestProducts.css'
import ProductCard from "../ProductsCard/ProductCard";
import Friday from '../../assets/Friday.png';
import Wyrewolf from '../../assets/Wyrewolf.png';
import Origin from '../../assets/Origins.png';
import BuildAR from '../../assets/BuildAR.png';

class LatestProducts extends React.Component {
  render() {
    return (
      <div id="latest-home-container">
        <div id='inner-container'>
        <h1>Latest Products</h1>
        <p>
        In a year, we have been able to leverage Artificial Intelligence, 
        Machine Learning, Augmented Reality and Virtual Reality to solve 
        problems through our products and services. 
        This year, we are looking to solve even more problems, 
        and we would like for you to be a part of this journey. 
        Take a look at some of our amazing products.
        </p>
        <div id='home-cards-container'>
        <ProductCard homeImage={Friday} homeName='Friday' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={Wyrewolf} homeName='Wyrewolf' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={Origin} homeName='Origin - Tales of Eri' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={BuildAR} homeName='BuildAR' homeDescription='A short description about the project 1' />
        </div>
        </div>
      </div>
    );
  }
}

export default LatestProducts;
