import React from 'react';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import TopHeader from './Components/TopHeader/TopHeader';


class App extends React.Component{
    render(){
        return(
            <div>
                <TopHeader />
                <NavBar />
                <Banner />
            </div>
        )
    }
}

export default App;
