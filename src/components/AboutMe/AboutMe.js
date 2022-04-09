import React from 'react';
import './AboutMe.css';

import { Link } from 'react-router-dom';

class AboutMe extends React.Component {
    render() {
        return (
            <div className="AboutMe" id="AboutMe">
                <div className="image_container">
                    <img src="../../../images/homepage_profile.jpg" alt="profile" />
                </div>
                <div className="separator"></div>
                <div className="info">
                    <div className="info_container">
                        <h2>About Me</h2>
                        <p className="description">
                            I'm a junior front-end developer looking for a new role in an exciting 
                            company. I focus on writing accessible HTML, using modern CSS practices 
                            and writing clean JavaScript. When writing JavaScript code, I mostly use 
                            React, but I can adapt to whatever tools are required. I'm based in Chandigarh,
                            India, but I'm happy to working remotely. However,
                            I'm open to relocating. When I'm not coding, you'll find me 
                            playing guitar or piano, and sometimes writing poems and songs. I'd love you to 
                            check out my work.
                        </p>
                        <button className="go-to">
                            <Link to='/portfolio' style={{textDecoration: 'none', color: 'inherit'}}>
                                Go to portfolio
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default AboutMe;

