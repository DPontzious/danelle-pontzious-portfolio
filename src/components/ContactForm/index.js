import React from 'react';
import "./style.css";

const ContactForm = () => (
    <form method="POST">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="message">Message</label>
        <textarea name="message" rows="3"></textarea>

        <input type="submit" />
    </form>
)
export default ContactForm;

// AIzaSyC5WFXd2py3uDd14uRReZ8Xk9YQIHdxk2s