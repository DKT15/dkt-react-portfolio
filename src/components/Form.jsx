import "../styles/Form.css";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";

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

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <p>Enter your details below to get in touch!</p>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="user_email"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="message"
            type="text"
            required
          />
        </Form.Group>
        <button type="submit" id="contact__submit" className="form__submit">
          Send it my way!
        </button>
      </Form>
    </>
  );
}

export default TextControlsExample;
