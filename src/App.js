import React from "react";
import AboutUs from "./AboutUs";
import { BrowserRouter, Route} from "react-router-dom";
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import NavBar from "./Components/NavBar/NavBar";
import circleLogo from "./assets/logo.svg";
// import textLogo from "./assets/text-logo.png";
import TopHeader from "./Components/TopHeader/TopHeader";
import Products from "./Product";
import MeetTheTeam from "./MeetTheTeam";

class App extends React.Component {
  render() {

    // const currentLogo = () => Route.path == 'AboutUs' ? textLogo : circleLogo
    // console.log(currentLogo);
    return (
        <div id="app-container">
            <BrowserRouter>
            <TopHeader />
            <NavBar logo={circleLogo} />
                <Route path='/' exact component={HomePage} />
                <Route path='/ServicePage' component={ServicesPage} />
                <Route path='/AboutUs' component={AboutUs} />
                <Route path='/Products' component={Products} />
                <Route path='/MeetTheTeam' component={ MeetTheTeam } />
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
