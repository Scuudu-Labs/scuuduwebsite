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
        <ProductCard homeImage={Friday} homeName='Friday' homeDescription='Automate your electronic appliances using an AI powered personal assistant.' />
        <ProductCard homeImage={Wyrewolf} homeName='Wyrewolf' homeDescription='Secure your transactions against fraud in real time.' />
        <ProductCard homeImage={Origin} homeName='Origin - Tales of Eri' homeDescription='Experience different African stories in an interactive virtual environment.' />
        <ProductCard homeImage={BuildAR} homeName='BuildAR' homeDescription='Explore different types of buildings in 3D on a plane surface.' />
        </div>
        </div>
      </div>
    );
  }
}

export default LatestProducts;
