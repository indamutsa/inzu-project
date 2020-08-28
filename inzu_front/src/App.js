import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import Service from "./containers/Service";
import Property from "./containers/Property";
import Contact from "./containers/Contact";
import PropertyDetail from "./containers/PropertyDetail";
import MainHeader from "./components/header/MainHeader";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NotFound from "./components/NotFound";
import PrivateRoute from "./components/privateRoute";

// import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./store";

import "./sass/main.scss";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <MainHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Service} />
            <Route path="/properties" component={Property} />
            <Route path="/contact" component={Contact} />
            <PrivateRoute path="/listings/:id" component={PropertyDetail} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
