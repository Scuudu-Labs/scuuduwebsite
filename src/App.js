import React from 'react';
import HomePage from './HomePage';
// import ServicesPage from './ServicesPage';



class App extends React.Component{
    render(){
        return(
            <div id='app-container'>
                <HomePage />
                {/* <ServicesPage /> */}
            </div>
        )
    }
}

export default App;
