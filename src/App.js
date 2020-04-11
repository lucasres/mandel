import React from 'react';
import './App.css';
import Editor from "./pages/Editor";
import Config from "./pages/Config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Editor}></Route>
        <Route path='/config' exact component={Config}></Route>
      </Switch>
    </Router>
  );
}

export default App;
