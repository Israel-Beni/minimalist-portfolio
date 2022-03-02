import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    render() {
        return (
            <section className="ContactForm">
                <h2>Contact Me</h2>
                <form action="">
                    <label for="name">Name</label><br />
                    <input id="name" name="name" type="text" placeholder="Jane Appleseed" /><br />
                    <label for="email">Email Address</label><br />
                    <input id="email" name="email" type="email" placeholder="email@example.com" /><br />
                    <label for="message">Message</label><br />
                    <textarea id="message" name="message">
                        How can I help?
                    </textarea>
                </form>
            </section>
        );
    }
};

export default ContactForm;