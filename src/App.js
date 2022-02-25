import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ContentBlock from './components/ContentBlock/ContentBlock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.currentPage ='HOME'
    this.changePage = this.changePage.bind(this);
  }

  changePage(currentPage) {
    this.currentPage = currentPage;
  }

  render() {
    return (
      <div className="App">
        <div className="separator_1"></div>
        <Header changePage={this.changePage} />
        <div className="separator_2"></div>
        <ContentBlock currentPage={this.currentPage}/>
        <div className="separator_3"></div>

      </div>
    );
  }
};

export default App;
