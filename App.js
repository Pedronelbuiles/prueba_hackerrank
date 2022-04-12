import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { PageSettings } from './context/page-settings';
import Content from './components/organisms/content';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: ''
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PageSettings.Provider value={this.state}>
            <Content />
        </PageSettings.Provider>
      </div>
    );
  }
}

export default App;
