import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Router} from "react-router-dom";
import {history} from "./helpers/history";
import Routes from "./Routes";

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
