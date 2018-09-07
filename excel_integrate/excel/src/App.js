import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  generateBDS = () => {
    var Excel = require('exceljs');
    var workbook = new Excel.Workbook();
    workbook.views = [
      {
        x: 0, y: 0, width: 10000, height: 20000,
        firstSheet: 0, activeTab: 1, visibility: 'visible'
      }
    ]
    var sheet = workbook.addWorksheet('My Sheet');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.generateBDS.bind(this)}>Genarate BDS</button>
        </p>
      </div>
    );
  }
}

export default App;
