import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListsContainer from './components/ListsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">List App</h1>
        </header>

        <ListsContainer />
      </div>
    );
  }
}

export default App;

// INSERT LINE 14 ()
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>