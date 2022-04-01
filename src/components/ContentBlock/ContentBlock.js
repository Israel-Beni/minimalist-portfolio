import React from 'react';
import './ContentBlock.css';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import Portfolio from '../Portfolio/Portfolio';

import { Route, Routes } from 'react-router-dom';

class ContentBlock extends React.Component {
    render() {
        return (
            <main className="ContentBlock">
                <Routes>
                    <Route path='/' element={<Banner />} />
                    <Route path='/home' element={<Banner />} />
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
                    <Route path='/contact-me' element={<ContactMe />} />
                </Routes>
                <Routes>
                    <Route path='/portfolio' element={<Portfolio />} />
                </Routes>
            </main>
        );
    }
};

export default ContentBlock;