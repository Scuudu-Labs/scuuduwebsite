import React from "react";
import AboutUs from "./AboutUs";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import servicesPage from "./ServicesPage";
import Products from "./Product";
import MeetTheTeam from "./MeetTheTeam";
import PageNotFOund from "./pageNotFound";
import Store from "./Components/Store/Store";
import PrivacyPolicy from "./PrivacyPolicy";
// import OchembaEnuguTickets from "./pages/OchembaTickets";
import OchembaEnuguTickets from "./pages/OchembaTickets/Components/OchembaTickets";

// const DefaultRoutes = () => {
//   return (
//     <Layout>
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/ServicePage" component={ServicesPage} />
//         <Route path="/AboutUs" component={AboutUs} />
//         <Route path="/Products" component={Products} />
//         <Route path="/MeetTheTeam" component={MeetTheTeam} />
//         <Route path="*" component={ExternalRoutes} />
//       </Switch>
//     </Layout>
//   );
// };

// const ExternalRoutes = () => {
//   return (
//     <Switch>
//       <Route path="/Store" component={ComingSoon} />
//       <Route path="*" component={PageNotFOund} />
//     </Switch>
//   );
// };

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/services" component={servicesPage} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/products" component={Products} />
            <Route path="/meet-the-team" component={MeetTheTeam} />
            <Route path="/store" component={Store} />
            <Route path="/privacy-policy/tranzakt" component={PrivacyPolicy} />
            <Route path="/ochemba/tickets" component={OchembaEnuguTickets} />
            <Route component={PageNotFOund} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
