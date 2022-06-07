import React from 'react';
import './Footer.css';
import ContactLink from '../ContactLink/ContactLink';
import FooterBar from '../FooterBar/FooterBar';

import { Routes, Route } from 'react-router-dom';



class Footer extends React.Component {
    render() {
        return (
            <div className="Footer">
                <Routes>
                    <Route path='/' element={<ContactLink />} />
                    <Route path='/home' element={<ContactLink />} />
                    <Route path='/portfolio' element={<ContactLink />} />
                </Routes>
                <FooterBar/>
            </div>
        );
    }
};

export default Footer;