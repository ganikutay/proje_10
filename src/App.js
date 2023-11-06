import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import BackgroundVideo from './components/BackgroundVideo';



export default class App extends Component {
    render() {
      return (
        <div className="App">
          <Main />
          <BackgroundVideo />
        </div>
      );
    }
  }

