import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Index from "./components/index";
import Single from "./components/single";
import New from "./components/new";
import Edit from "./components/edit";

import Dashboard from './components/Dashboard';
import Login from './components/pages/auth/Login'

const App = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={Index} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/post/:id" exact component={Single} />
      <Route path="/edit/:id" exact component={Edit} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("app"));
