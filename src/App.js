import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Home from './components/Home';
import Feed from './components/Feed';
import Login from './components/Login';
import MapView from './components/MapView';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/map-view" component={MapView} />
        </div>
      </Router>
    );
  }
}

export default App;
