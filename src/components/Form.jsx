import "../styles/Form.css";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function TextControlsExample() {
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
        <div className="form__wrapper">
          <p className="enter__details">
            Enter your details below to get in touch!
          </p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="email__address">Email address</Form.Label>
            <Form.Control
              name="user_email"
              type="email"
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
              placeholder="enter here"
              type="text"
              required
            />
          </Form.Group>
          <button type="submit" id="contact__submit" className="form__submit">
            Send it my way!
          </button>
          <div className="form__links">
            <a href="https://github.com/DKT15">
              <FontAwesomeIcon className="form__link" icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/dant%C3%A9-kellman-thompson-8b720720a/">
              <FontAwesomeIcon className="form__link" icon={faLinkedin} />
            </a>
            <a href="https://github.com/DKT15">
              <FontAwesomeIcon className="form__link" icon={faFile} />
            </a>
          </div>
        </div>
      </Form>
    </>
  );
}

export default TextControlsExample;
