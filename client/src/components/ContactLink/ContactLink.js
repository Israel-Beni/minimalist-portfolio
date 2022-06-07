import React from 'react';
import './ContactLink.css';

import { Link } from 'react-router-dom';

class ContactLink extends React.Component {
    render() {
        return (
            <div className="ContactLink">
                <p className="info">
                    Interested in doing a project together?
                </p>
                <div className="separator"></div>
                <button className="contact-me">
                    <Link to='/contact-me' style={{color: 'inherit', textDecoration: 'none'}}>
                        Contact me
                    </Link>
                </button>
            </div>
        );
    }
};

export default ContactLink;