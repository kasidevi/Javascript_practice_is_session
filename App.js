//router path it is important to deploy
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CarList } from './components/CarsList/index.js';
import './components/CarsList/carlist.css';
import { TodoList } from './components/TodoList/todolist.js';
import './components/TodoList/todolist.css';
import { FormComponent } from './components/FormComponents/FormComponent.js';
import './components/FormComponents/FormComponent.css';
import { CountriesDashboardApp } from './components/CountriesDashboardApp/CountriesDashboardApp.js';
import CountryDetails from './components/CountryDetails/CountryDetails.js';
import './components/CountriesDashboardApp/CountriesDashboardApp.css';

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import "./App.css";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
