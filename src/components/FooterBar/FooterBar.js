import React from 'react';
import './FooterBar.css';
import logo from '../../images/logo.svg';
import github from '../../images/icons/github.svg';
import twitter from '../../images/icons/twitter.svg';

import linkedin from '../../images/icons/linkedin.svg';

class FooterBar extends React.Component {
    constructor(props) {
        super(props);
        this.links = {
            home: 'HOME',
            portfolio: 'PORTFOLIO',
            contact: 'CONTACT ME'
        };
        this.renderLinks = this.renderLinks.bind(this);
    }

    renderLinks() {
        return Object.keys(this.links).map( link => {
            const linkValue = this.links[link];
            return <li key={linkValue}
                        onClick={ event => {
                                this.props.changePage(linkValue)
                            }
                        }
                    >{linkValue}</li>
        })
    }

    render() {
        return (
            <div className="FooterBar">
                <div className="container">
                    <div className="links">
                        <div className="logo-container">
                            <img src={logo} alt="logo" />
                        </div>
                        <ul className="menu">
                            {this.renderLinks()}
                        </ul>
                    </div>
                    <div className="separator"></div>
                    <div className="social-media">
                        <a href="https://github.com/Israel-Beni"><img src={github} alt="my github link" /></a>
                        <a href="#"><img src={twitter} alt="my twitter link" /></a>
                        <a href="https://www.linkedin.com/in/ben-t-degbe-902218175/"><img src={linkedin} alt="my linkedin link" /></a>
                    </div>
                </div>
            </div>
        );
    }
};

export default FooterBar;