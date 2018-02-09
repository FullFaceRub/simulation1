import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="mainHeader">
          <Link to='/'><div className="logo"></div></Link>
          <div><h1>Hi Dan</h1></div>
        </header>
        <div className="mainBody">
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
