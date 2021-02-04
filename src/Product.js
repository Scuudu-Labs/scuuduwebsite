import React from 'react';
import ClientAndPatners from './Components/ClientsAndPatners/ClientAndPatners';
import ProductBanner from './Components/ProductBanner/ProductBanner';
import ProductsPreview from './Components/ProductsPreview/ProductsPreview';
import Subscribe from './Components/Subscribe/Subcribe';


class Product extends React.Component{
    render(){
        return(
            <div>
                <ProductBanner />
                <ProductsPreview />
                <ClientAndPatners />
                <Subscribe />
            </div>
        )
    }
}

export default Product