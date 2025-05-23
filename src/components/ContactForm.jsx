import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import emailjs from "@emailjs/browser";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    formName: "",
    formEmail: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState(""); // success or error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_uu2xf55";
    const templateID = "template_znhg5hj";
    const publicKey = "4T-nuIusr_WSXK11D";

    emailjs.send(serviceID, templateID, formData, publicKey)
      .then(() => {
        setStatus("Message sent successfully!");
        setStatusType("success");
        setFormData({ formName: "", formEmail: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Failed to send message. Please try again.");
        setStatusType("error");
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="formName" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="formName"
          required
          value={formData.formName}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="formEmail" label="Email address" className="mb-3">
        <Form.Control
          type="email"
          placeholder="Email"
          name="formEmail"
          required
          value={formData.formEmail}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel controlId="formMessage" label="Your Message" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Your Message"
          style={{ height: "150px" }}
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
        />
      </FloatingLabel>

      <div className="text-center">
        <Button className="main-btn" type="submit">
          Send Message
        </Button>
      </div>

      {status && (
        <p className={`status-message ${statusType}`}>
          {status}
        </p>
      )}
    </Form>
  );
};

export default ContactForm;
