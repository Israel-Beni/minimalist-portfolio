import React from 'react';
import './ContactMe.css';
import GetInTouch from '../GetInTouch/GetInTouch';
import ContactForm from '../ContactForm/ContactForm';

class ContactMe extends React.Component {

    // To deactivate the Home menu item when as soon as Banner is unmounted
    componentDidMount() {
        console.log('Hello from ComponentDidMount in ContactMe');
        this.props.deactivateHomeMenuItem('home');
    }
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