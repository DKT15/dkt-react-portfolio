import React from "react";
import "../styles/Form.css";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

export default function TextControlsExample() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleFormSubmit = async (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    emailjs.init("M05BeQ_HdwdgDuf_1");

    try {
      const sentemail = await emailjs.sendForm(
        "service_jc3uxsf",
        "template_d98c8qh",
        event.target,
        "fcZVbl_CsS9acTyL0"
      );

      if (sentemail.text === "OK") {
        event.target.reset(); // clear the form
        setSubmitted(true); // show success message
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("There was an error sending your message.");
    }
  };

  // Code for my form to go on the contact page.
  return (
    <>
      <h1 className="contact__title">Contact</h1>
      {submitted ? (
        <p className="success-text">
          Thanks for getting in touch. Look forward to speaking with you soon!
        </p>
      ) : (
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
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
      )}
    </>
  );
}
