import React from 'react';
import './App.css';
import Editor from "./pages/Editor";
import Config from "./pages/Config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import ConfigStore from "./store";

function App() {
  return (
    <Provider store={ConfigStore}>
      <Router>
        <Switch>
          <Route path='/' exact component={Editor}></Route>
          <Route path='/config' exact component={Config}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
