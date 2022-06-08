import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentBlock from './components/ContentBlock/ContentBlock';
import Footer from './components/Footer/Footer';
import Login from './auth/Login/Login.js';
import Register from './auth/Register/Register.js';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    /*
    this.state = {
      navigate: [],
      counter: 0
    };*/
    this.activateHomeMenuItem = this.activateHomeMenuItem.bind(this);
    this.deactivateHomeMenuItem = this.deactivateHomeMenuItem.bind(this);
  }


  activateHomeMenuItem(menuItemValue) {
    const home = document.getElementById(menuItemValue)
    menuItemValue === 'home' ? home.setAttribute('class', 'active') : console.log();
}

deactivateHomeMenuItem(menuItemValue) {
    const home = document.getElementById(menuItemValue)
    menuItemValue === 'home'? home.removeAttribute('class') : console.log();
}


  async componentDidMount() {
    /*
    if (this.state.counter === 0) {
    await setTimeout( ()=> {
      this.setState({
        counter: this.state.counter + 1,
        navigate: <Navigate to="/login" />
      });
    }, 3000);
  }*/
  }

  componentWillUnmount() {/*
    this.setState({
      navigate: []
    })*/
  }


  render() {
    return (
      <Router basename={'/' + process.env.PUBLIC_URL}>
        <div className="App">
          
          { /* this.state.counter < 1 ? this.state.navigate : console.log() */}
          <div className="separator_1"></div>
          <Header activateHomeMenuItem={this.activateHomeMenuItem}
                  deactivateHomeMenuItem={this.deactivateHomeMenuItem}
                  />
          <div className="separator_2"></div>
          

          <Routes>
            <Route path='/*' element={<ContentBlock deactivateHomeMenuItem={this.deactivateHomeMenuItem}/>} />
          </Routes>

          <div className="separator_3"></div>
          <Footer  />
        </div>
      </Router>
    );
  }
};

export default App;
