import React from "react";
import ProductsPreviewCard from "../ProductsPreviewCard/ProductsPreviewCard";
import "./ProductsPreview.css";
import products from './Products.json'

class ProductsPreview extends React.Component {
  render() {
    return (
      <div id='products-card-container'>
        <div id='products-card-inner-container'>
        {
          products.map((product)=>{
            return(
              <ProductsPreviewCard
              key={product.id}
              productImage={product.image}
              productName={product.name}
              productDescription={product.description}
            />
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default ProductsPreview;
