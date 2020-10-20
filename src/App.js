import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import ClassList from "./Components/ClassList/ClassList";
import Footer from "./Components/Footer/Footer";
import Schedule from "./Components/Schedule/Schedule";
import Pricing from "./Components/Pricing/Pricing";
import Membership from "./Components/Membership/Membership";
import { GymProvider } from "./Components/GymContext/GymContext";
import { StepProvider } from "./Components/GymContext/StepContext";
import Finished from "./Components/Finished/Finished";
import Notfound from "./Components/NotFound/Notfound";
import { PrivateRoute } from "./Components/PrivetRoute/PrivetRoute";
import HomeExtra from "./Components/HomeExtra/HomeExtra";
function App() {
  return (
    <>
      <Router>
        <GymProvider>
          <StepProvider>
            <Switch>
              <Route exact path="/">
                <Home></Home>
                <HomeExtra></HomeExtra>
                <Footer></Footer>
              </Route>
              <Route exact path="/class">
                <ClassList></ClassList>
                <Footer></Footer>
              </Route>
              <Route exact path="/schedule/:key">
                <Schedule></Schedule>
                <Footer></Footer>
              </Route>
              <Route exact path="/pricing/:key">
                <Pricing></Pricing>
                <Footer></Footer>
              </Route>
              <Route exact path="/membership/:key/:price_cat">
                <Membership></Membership>
                <Footer></Footer>
              </Route>
              <PrivateRoute exact path="/complete/:ki/:mi">
                <Finished></Finished>
                <Footer></Footer>
              </PrivateRoute>
              <Route path="*">
                <Notfound></Notfound>
                
              </Route>
            </Switch>
          </StepProvider>
        </GymProvider>
      </Router>
    </>
  );
}

export default App;
