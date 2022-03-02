import React from 'react';
import './ContactMe.css';
import GetInTouch from '../GetInTouch/GetInTouch';
import ContactForm from '../ContactForm/ContactForm';

class ContactMe extends React.Component {
    render() {
        return (
            <section className="ContactMe">
                <GetInTouch />
                <ContactForm />
            </section>
        );
    }
};

export default ContactMe;