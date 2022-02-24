import React from 'react';
import './ContentBlock.css';
import Banner from '../Banner/Banner';

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
        const currentPage = this.props.currentPage;
        if (currentPage.toLowerCase() === 'home') {
            return (
                <div className="ContentBlock">
                    <Banner />
                    <div className="separator"></div>
                    
                </div>
            );
        }
    }

};

export default ContentBlock;