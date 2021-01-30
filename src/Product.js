import React from 'react';
import ClientAndPatners from './Components/ClientsAndPatners/ClientAndPatners';
import Footer from './Components/Footer/Footer';
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
                <Footer />
            </div>
        )
    }
}

export default Product