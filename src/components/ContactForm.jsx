import React, { useState, useEffect } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    formName: "",
    formEmail: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto clear status message
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
        setStatusType("");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trim validation
    if (
      !formData.formName.trim() ||
      !formData.formEmail.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill all fields.");
      setStatusType("error");
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      setLoading(true);

      await emailjs.send(
        serviceID,
        templateID,
        formData,
        publicKey
      );

      setStatus("Message sent successfully!");
      setStatusType("success");
      setFormData({
        formName: "",
        formEmail: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="formName"
        label="Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="Name"
          name="formName"
          required
          value={formData.formName}
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
          name="formEmail"
          required
          value={formData.formEmail}
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
        <Button
          className="main-btn"
          type="submit"
          disabled={loading}
          aria-label="Send Message"
        >
          {loading ? "Sending..." : "Send Message"}
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