import React from 'react';
import './ContactLink.css';

class ContactLink extends React.Component {
    render() {
        return (
            <div className="ContactLink">
                <p className="info">
                    Interested in doing a project together?
                </p>
                <div className="separator"></div>
                <button className="contact-me">
                    Contact me
                </button>
            </div>
        );
    }
};

export default ContactLink;