import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  gitAuth = () => {
    alert("hi");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Git Watcher. Click the button below to register!</h1>
        </header>
        <p className="App-intro">
          <button
            onClick = {this.gitAuth}> Click to get started </button>
        </p>
      </div>
    );
  }
}

export default App;
