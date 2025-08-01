import React from "react";
import "../styles/Form.css";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

export default function TextControlsExample() {
  const handleFormSubmit = async (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Getting values from the emailjs API.
    emailjs.init("M05BeQ_HdwdgDuf_1");
    const sentemail = await emailjs.sendForm(
      "service_e0skzz9",
      "template_2oxjovj",
      event.target,
      "M05BeQ_HdwdgDuf_1"
    );
    // When sentemail.text is ok clear the form data, display confirm message in component.
    sentemail.text === "Ok";
    event.target.reset();
    confirm(
      "Thanks for getting in touch. Look forward to speaking with you soon!"
    );
  };

  // Code for my form to go on the contact page.
  return (
    <>
      <h1 className="contact__title">Contact</h1>
      <Form className="form" onSubmit={handleFormSubmit}>
        <section
          className="form__wrapper"
          role="region"
          aria-labelledby="contact form"
        >
          <p className="enter__details">
            Enter your details below to get in touch!
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="email__address">Email address</Form.Label>
            <Form.Control
              name="user_email"
              type="email"
              aria-label="Enter your email address"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="enter__message">
              Enter your message
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              aria-label="Enter your message here"
              placeholder="Enter your message here"
              type="text"
              required
            />
          </Form.Group>
          <button type="submit" id="contact__submit" className="form__submit">
            Send it my way!
          </button>
        </section>
      </Form>
    </>
  );
}
