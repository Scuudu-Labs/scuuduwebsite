import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer';
import TopHeader from '../TopHeader/TopHeader';
const Layout = (props) => {
        return <div>
            <TopHeader />
            <NavBar logo={props.logo} />
            {props.children}
            <Footer />
        </div>
};

export default Layout;