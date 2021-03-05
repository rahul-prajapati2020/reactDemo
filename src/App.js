//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import FeaturesPage from './Pages/FeaturesPage';
import AboutUs from './Pages/AboutUs';
import WebHosting from "./Pages/WebHosting";
import CloudServer from "./Pages/CloudServer";
import DedicatedHosting from "./Pages/DedicatedHosting";
import PricingPage from "./Pages/PricingPage";
import Contact from "./Pages/Contact";
import DomainPage from "./Pages/DomainPage";


class App extends Component {

  render() {
    return (
      <Router forceRefresh>
        <div className="App">
          <Helmet>
            <script src="js/modernizer.js"></script>
          </Helmet>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/web-hosting" component={WebHosting} />
          <Route path="/cloud-server" component={CloudServer} />
          <Route path="/dedicated-hosting" component={DedicatedHosting} />
          <Route path="/domain" component={DomainPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/contact" component={Contact} />

          <Footer />
          <Helmet>
            <script src="js/all.js"></script>
            <script src="js/custom.js"></script>
            <script src="js/timeline.min.js"></script>
          </Helmet>
        </div>
      </Router>
    );
  }
}

export default App;
