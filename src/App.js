import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import TopHeader from './Components/TopHeader/TopHeader';


class App extends React.Component{
    render(){
        return(
            <div>
                <TopHeader />
                <NavBar />
            </div>
        )
    }
}

export default App;
