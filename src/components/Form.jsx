import React from "react";
import "../styles/Form.css";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router-dom";

export default function TextControlsExample() {
  // tracking whether or not the form has been submitted.
  const [submitted, setSubmitted] = React.useState(false);

  // tracking the loading state. If the form is loading then sending will be displayed in the button to let the user know.
  const [loading, setLoading] = React.useState(false);

  // let navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    // Preventing the form submit from refreshing the page)
    event.preventDefault();

    // set loading to true before the async call below.
    setLoading(true);

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
        // navigate("/");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("There was an error sending your message.");
    }
    setLoading(false);
  };

  // Code for my form to go on the contact page.
  // If submitted is true, then the message in the p text will be displayed. Otherwise the form will stay on the page and an alert will be displayed to the user.
  // The error alerts are in the above code.
  return (
    <>
      <h1 className="contact__title">Contact</h1>
      {submitted ? (
        <div className="text__wrapper">
          <p className="success-text">
            Thanks for getting in touch. Look forward to speaking with you soon!
          </p>
        </div>
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
              <Form.Label className="email__address">*Email address</Form.Label>
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
                *Enter your message
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
              {loading ? "Sending..." : "Send it my way!"}
            </button>
          </section>
        </Form>
      )}
    </>
  );
}
