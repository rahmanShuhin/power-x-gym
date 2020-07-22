import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import ClassList from "./Components/ClassList/ClassList";
import Footer from "./Components/Footer/Footer";
import Schedule from "./Components/Schedule/Schedule";
import Pricing from "./Components/Pricing/Pricing";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/class">
            <ClassList></ClassList>
            <Footer></Footer>
          </Route>
          <Route path="/schedule/:key">
            <Schedule></Schedule>
            <Footer></Footer>
          </Route>
          <Route path="/pricing/:key">
            <Pricing></Pricing>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
