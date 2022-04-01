import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentBlock from './components/ContentBlock/ContentBlock';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'HOME'
    }
    this.isHomeActive = true;
    this.changePage = this.changePage.bind(this);
    this.activateHomeMenuItem = this.activateHomeMenuItem.bind(this);
    this.deactivateHomeMenuItem = this.deactivateHomeMenuItem.bind(this);
    this.getCurrentPage = this.getCurrentPage.bind(this);
  }


  activateHomeMenuItem(menuItemValue) {
    const home = document.getElementById(menuItemValue)
    menuItemValue === 'home' ? home.setAttribute('class', 'active') : console.log();
}

deactivateHomeMenuItem(menuItemValue) {
    const home = document.getElementById(menuItemValue)
    menuItemValue === 'home'? home.removeAttribute('class') : console.log();
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
      <Router>
        <div className="App">
          <div className="separator_1"></div>
          <Header changePage={this.changePage}
                  activateHomeMenuItem={this.activateHomeMenuItem}
                  deactivateHomeMenuItem={this.deactivateHomeMenuItem}
                  />
          <div className="separator_2"></div>

          <Routes>
            <Route path='/*' element={<ContentBlock changePage={this.changePage}
                                                    getCurrentPage={this.getCurrentPage}
                                                    deactivateHomeMenuItem={this.deactivateHomeMenuItem}/>} />
          </Routes>

          <div className="separator_3"></div>
          <Footer changePage={this.changePage} getCurrentPage={this.getCurrentPage} />
        </div>
      </Router>
    );
  }
};

export default App;
