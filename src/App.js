import React, { Component } from 'react';
import RFSJumbo from './main/RFSJumbo.js';
import RFSNav from './main/RFSNav.js';
import RFSFooter from './main/RFSFooter.js';
import RFSPostList from './main/RFSPostList.js';
import './App.css';
import logo from './logo.svg';

const App = () => 
  <div className="App">
    <RFSJumbo />
    <RFSNav />
    <RFSPostList />
    <RFSFooter />
  </div>

export default App;


/*       <div class="builtwith">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="content">
          <h3>Built with React</h3>
        </div>
      </div> */