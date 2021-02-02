import React from "react";
import AboutUs from "./AboutUs";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from './HomePage';
import ServicesPage from './ServicesPage';
import Products from "./Product";
import MeetTheTeam from "./MeetTheTeam";
import PageNotFOund from "./pageNotFound";
import ComingSoon from "./Components/ComingSoon/ComingSoonComponent";

class App extends React.Component {
  render() {

    // const currentLogo = () => Route.path == 'AboutUs' ? textLogo : circleLogo
    // console.log(currentLogo);
    return (
        <div id="app-container">
            <BrowserRouter>
              <Switch>
              <Route path='/' exact component={HomePage} />
                <Route path='/ServicePage' component={ServicesPage} />
                <Route path='/AboutUs' component={AboutUs} />
                <Route path='/Products' component={Products} />
                <Route path='/MeetTheTeam' component={ MeetTheTeam } />
                <Route path='/Store' component={ ComingSoon} />
                <Route component={ PageNotFOund } />
              </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
