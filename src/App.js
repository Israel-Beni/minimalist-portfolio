import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentBlock from './components/ContentBlock/ContentBlock';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Route } from 'react-router-dom';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'HOME'
    }
    this.changePage = this.changePage.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
  }

  changePage(currentPage) {
    this.setState({
      currentPage: currentPage
    })
  }

  getCurrentPage() {
    return this.state.currentPage;
  }

  render() {
    return (
      <div className="App">
        <div className="separator_1"></div>
        <Header changePage={this.changePage} />
        <div className="separator_2"></div>
        <ContentBlock changePage={this.changePage} getCurrentPage={this.getCurrentPage} />
        <div className="separator_3"></div>
        <Footer changePage={this.changePage} getCurrentPage={this.getCurrentPage} />
      </div>
    );
  }
};

export default App;
