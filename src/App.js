import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Email from './components/trumail';
import Password from './components/password';
import Username from './components/username';
import LogIn from './containers/LogIn';
import Register from './containers/Register';
import Button from './components/button';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Main/>
            <Footer/>
          </div>
        </Router>
      </div>
      
    );
  }
}

const Main = (props) => (
    <div>
      <Route exact path = "/LogIn" component={LogIn}/>
      <Route exact path = "/Register" component={Register}/>
    </div>
  )

export default App;
