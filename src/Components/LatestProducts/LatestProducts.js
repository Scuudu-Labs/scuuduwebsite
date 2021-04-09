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
        In a year, we have been able to leverage Artificial Intelligence, 
        Machine Learning, Augmented Reality and Virtual Reality to solve 
        problems through our products and services. 
        This year, we are looking to solve even more problems, 
        and we would like for you to be a part of this journey. 
        Take a look at some of our amazing products.
        </p>
        <div id='home-cards-container'>
        <ProductCard homeImage={greenCard} homeName='Friday' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={ashCard} homeName='Wyrewolf' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={yelloward} homeName='Origin - Tales of Eri' homeDescription='A short description about the project 1' />
        <ProductCard homeImage={tickAsh} homeName='BuildAR' homeDescription='A short description about the project 1' />
        </div>
        </div>
      </div>
    );
  }
}

export default LatestProducts;
