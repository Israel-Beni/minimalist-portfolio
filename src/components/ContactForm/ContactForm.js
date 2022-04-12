import React from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import apiKeys from "../../emailkey.js";

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, event.target, apiKeys.PUBLIC_KEY)
                .then(result => {
                    alert("Message Sent, We will get back to you shortly", result.text);
                }, error => {
                    alert("An error occurred, Please try again", error.text);
                });
    }

    render() {
        return (
            <section className="ContactForm">
                <h2>Contact Me</h2>
                <div className="separator"></div>
                <form action="" onSubmit={this.handleSubmit}>
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