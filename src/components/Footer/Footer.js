import React from 'react';
import './Footer.css';
import ContactLink from '../ContactLink/ContactLink';

class Footer extends React.Component {
    render() {
        return (
            <div class="Footer">
                <ContactLink />
                
            </div>
        );
    }
};

export default Footer;