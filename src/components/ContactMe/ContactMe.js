import React from 'react';
import './ContactMe.css';
import '../GetInTouch/GetInTouch';

class ContactMe extends React.Component {
    render() {
        return (
            <section className="ContactMe">
                <GetInTouch />
            </section>
        );
    }
};

export default ContactMe;