import React, { Component } from 'react';
import Jumbo from './main/RFSJumbo.js';
import Nav from './main/RFSNav.js';
import Footer from './main/RFSFooter.js';
import PostList from './main/RFSPostList.js';
import './App.css';
import logo from './logo.svg';

const App = () => 
  <div className="App">
    <Jumbo />
    <Nav />
    <PostList />
    <Footer />
  </div>

export default App;


/*       <div class="builtwith">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="content">
          <h3>Built with React</h3>
        </div>
      </div> */