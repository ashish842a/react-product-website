import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnorkw");
  if (state.succeeded) {
      return <p className="alert alert-success">Thanks for joining!</p>;
  }
  return (
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email" 
            name="email"
            className="form-control"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="alert alert-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            className="alert alert-danger"
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary" disabled={state.submitting}>Submit</button>
      </form>
  );
}

export default ContactForm;
