import React from 'react';
import './Footer.css';
import ContactLink from '../ContactLink/ContactLink';
import FooterBar from '../FooterBar/FooterBar';

import { Routes, Route } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        const currentPage = this.props.getCurrentPage();
        if (currentPage.toLowerCase().trim().replace(/ /, '-') === 'contact-me') {
            return (
                <div className="Footer">
                    <FooterBar changePage={this.props.changePage} />
                </div>
            );
        } else {
            return (
                <div className="Footer">
                    <Routes>
                        <Route path='/' element={<ContactLink />} />
                        <Route path='/home' element={<ContactLink />} />
                        <Route path='/portfolio' element={<ContactLink />} />
                    </Routes>
                    <FooterBar changePage={this.props.changePage} />
                </div>
            );
        }
    }
};

export default Footer;