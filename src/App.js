import React from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Services from './Components/Services/Services';
import TopHeader from './Components/TopHeader/TopHeader';


class App extends React.Component{
    render(){
        return(
            <div>
                <TopHeader />
                <NavBar />
                <Banner />
                <Services />
            </div>
        )
    }
}

export default App;
