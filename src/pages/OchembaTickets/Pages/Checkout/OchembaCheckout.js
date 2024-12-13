import React from "react";
import "./CheckoutPage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Checkout from "../../Components/Checkout/Checkout";

const OchembaCheckoutPage =  ()=> {
    return (
        <div className="main">
               <Header showLink={false}/>
               <Checkout />
               <Footer />
        </div>
    );

}

export default OchembaCheckoutPage;
