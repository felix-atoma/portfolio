import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

const Contact = () => {
  // Use the new Formspree endpoint
  const [state, handleSubmit] = useForm("mannkwnr");
  
  if (state.succeeded) {
    return (
      <div className="success">
        <h3>Thank you. I appreciate your message. Will respond ASAP.</h3>
      </div>
    );
  }

  return (
    <section id="contact">
      <h5>Contact</h5>
      <h2>Let's <span>Connect</span></h2>

      <div className="form_container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="company">Company Name</label>
          <input
            id="company"
            type="text"
            name="name"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message..."
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting} className="btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
