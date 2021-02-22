import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
    return (
    <form className="contact_form" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your email" />
        <input type="text" placeholder="Your phone" />
        <textarea placeholder="Message (up to 200 words)"></textarea>
        <input type="submit" value="Send Message" />
    </form>);
    }

export default ContactForm;