
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const initialFormData = {
  formName: "",
  formEmail: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto-clear status message
  useEffect(() => {
    if (!status) return;

    const timer = setTimeout(() => {
      setStatus("");
      setStatusType("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    if (!serviceID || !templateID || !publicKey) {
      setStatus("Contact form configuration is missing.");
      setStatusType("error");
      return;
    }

    try {
      setLoading(true);
      setStatus("");
      setStatusType("");

      await emailjs.send(
        serviceID,
        templateID,
        {
          formName: formData.formName.trim(),
          formEmail: formData.formEmail.trim(),
          message: formData.message.trim(),
        },
        { publicKey }
      );

      setStatus("Message sent successfully!");
      setStatusType("success");
      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#233dff] focus:ring-4 focus:ring-[#233dff]/10 disabled:cursor-not-allowed disabled:bg-gray-50";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* NAME */}
      <div>
        <label
          htmlFor="formName"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Name <span className="text-red-500">*</span>
        </label>

        <input
          id="formName"
          type="text"
          name="formName"
          placeholder="Enter your name"
          autoComplete="name"
          required
          maxLength={120}
          value={formData.formName}
          onChange={handleChange}
          disabled={loading}
          className={inputClass}
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="formEmail"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Email Address <span className="text-red-500">*</span>
        </label>

        <input
          id="formEmail"
          type="email"
          name="formEmail"
          placeholder="Enter your email address"
          autoComplete="email"
          required
          maxLength={254}
          value={formData.formEmail}
          onChange={handleChange}
          disabled={loading}
          className={inputClass}
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label
          htmlFor="formMessage"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Your Message <span className="text-red-500">*</span>
        </label>

        <textarea
          id="formMessage"
          name="message"
          placeholder="Tell me about your project or idea..."
          rows={5}
          maxLength={5000}
          required
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          className={`${inputClass} min-h-36 resize-y`}
        />
      </div>

      {/* SUBMIT */}
      <div className="pt-1">
        <button
          type="submit"
          disabled={loading}
          aria-label="Send Message"
          className="main-btn inline-flex w-full items-center justify-center px-6 py-3 font-semibold text-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>

      {/* STATUS */}
      {status && (
        <p
          role="status"
          aria-live="polite"
          className={`rounded-xl border px-4 py-3 text-sm font-medium ${
            statusType === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
