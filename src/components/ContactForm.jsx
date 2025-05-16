import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setStatusType("loading");

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setStatusType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message.");
        setStatusType("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong.");
      setStatusType("error");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel controlId="formName" label="Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="formEmail"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="formMessage"
        label="Your Message"
        className="mb-3"
      >
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
      {status && <p className={`status-message ${statusType}`}>{status}</p>}
    </Form>
  );
};

export default ContactForm;
