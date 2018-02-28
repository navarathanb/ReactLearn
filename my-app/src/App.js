import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Test from './test';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
          <h1 className="App-title">Welcome to React</h1>
          <h3 class="title">Grocery Factory</h3>
          <nav class="menu">
            <ul class="nav">
              <li><a href="test.html">Home</a>
                <ul class="subNav">
                  <li><a href="test.html">Test - 1</a></li>
                </ul>
              </li>
              <li><a href="test.html">About Us</a></li>
              <li><a href="test.html">Services</a></li>
              <li><a href="test.html">Career</a></li>
              <li><a href="test.html">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        <p className="App-intro">
          <Test/>
        </p>
      </div>
    );
  }
}

export default App;
