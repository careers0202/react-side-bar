import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import SideBar from './components/sideBar';
import Home from './components/home'


import './App.css';
import About from './components/About';
import Contact from './components/contact';

import NotFound from './components/NotFound';
import NavBar from './components/nav';
import Transaction from './components/task';
import Sidebar from './components/sideBar';

class App extends Component {

  constructor() {
    super();

    this.state = {}

  }

  render() {

    return (
      <div>
        <Router>
          <NavBar />
          <div className="d-flex justify-space-between">
            <div>
              <Sidebar />
            </div>

            <div className="text-center main-sec">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/transaction/:id/:item" component={Transaction} />

                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
              </Switch>
            </div>
          </div>
        </Router>
      </div>

    )
  }

}

export default App; // default export


// Dynamic value in route is called -----> Route Paramas