import React from 'react';
import './Footer.css';
import ContactLink from '../ContactLink/ContactLink';
import FooterBar from '../FooterBar/FooterBar';

class Footer extends React.Component {
    render() {
        return (
            <div class="Footer">
                <ContactLink />
                <FooterBar changePage={this.props.changePage} />
            </div>
        );
    }
};

export default Footer;