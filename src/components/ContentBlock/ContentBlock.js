import React from 'react';
import './ContentBlock.css';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Portfolio from '../Portfolio/Portfolio';

import { Route, Routes } from 'react-router-dom';

class ContentBlock extends React.Component {
    constructor(props) {
        super(props);
        this.deactivateHomeMenuItem = this.deactivateHomeMenuItem.bind(this);
    }

    deactivateHomeMenuItem(menuItemValue) {
        const home = document.getElementById(menuItemValue)
        console.log('home: ', home);
        menuItemValue === 'home' ? home.removeAttribute('class') : console.log();
        console.log(home.getAttribute('class'));
}
    render() {
        return (
            <main className="ContentBlock">
                <Routes>
                    <Route path='/' element={<Banner deactivateHomeMenuItem={this.props.deactivateHomeMenuItem} />} />
                    <Route path='/home' element={<Banner deactivateHomeMenuItem={this.props.deactivateHomeMenuItem} />} />
                </Routes>

                <Routes>
                    <Route path='/' element={<div className="separator"></div>} />
                    <Route path='/home' element={<div className="separator"></div>} />
                </Routes>

                <Routes>
                    <Route path='/' element={<AboutMe />} />
                    <Route path='/home' element={<AboutMe />} />
                </Routes>
                <Routes>
                    <Route path='/contact-me' element={<ContactMe deactivateHomeMenuItem={this.props.deactivateHomeMenuItem} />} />
                </Routes>
                <Routes>
                    <Route path='/portfolio/*' element={<Portfolio deactivateHomeMenuItem={this.props.deactivateHomeMenuItem} />} />
                </Routes>
            </main>
        );
    }
};

export default ContentBlock;