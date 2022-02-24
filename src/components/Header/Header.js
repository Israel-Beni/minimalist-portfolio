import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="header">
                <div className="logo_container">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="navigation_menu">
                    <li className="home">Home</li>
                    <li className="portfolio">Portfolio</li>
                    <li className="contact_me">Contact Me</li>
                </ul>
            </div>
        );
    }
};

export default Header;