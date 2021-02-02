import React from 'react';
import ClientAndPatners from './Components/ClientsAndPatners/ClientAndPatners';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import ProductBanner from './Components/ProductBanner/ProductBanner';
import ProductsPreview from './Components/ProductsPreview/ProductsPreview';
import Subscribe from './Components/Subscribe/Subcribe';
import TopHeader from './Components/TopHeader/TopHeader';


class Product extends React.Component{
    render(){
        return(
            <div>
                <TopHeader />
                <NavBar />
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