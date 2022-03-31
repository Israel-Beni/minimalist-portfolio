import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    render() {
        return (
            <section className="ContactForm">
                <h2>Contact Me</h2>
                <div className="separator"></div>
                <form action="">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="Jane Appleseed" />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" placeholder="email@example.com" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="How can I help?" />
                    </div>
                    <input type="submit" className="submit" value="Submit Message"/>
                </form>
            </section>
        );
    }
};

export default ContactForm;