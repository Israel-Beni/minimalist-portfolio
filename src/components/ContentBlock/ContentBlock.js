import React from 'react';
import './ContentBlock.css';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';

class ContentBlock extends React.Component {
    constructor(props) {
        super(props);
        //this.renderContentBlock = this.renderContentBlock.bind(this);
    }

    /*
    renderContentBlock() {
        const currentPage = this.props.currentPage;
        if (currentPage.toLowerCase() === 'home') {
            return (
                <banner />
            );
        }
    }*/

    render() {
        const currentPage = this.props.getCurrentPage();
        if (currentPage.toLowerCase() === 'home') {
            return (
                <main className="ContentBlock">
                    <Banner />
                    <div className="separator"></div>
                    <AboutMe changePage={this.props.changePage} />
                </main>
            );
        }
    }

};

export default ContentBlock;