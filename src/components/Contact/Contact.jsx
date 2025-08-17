// src/components/Contact/Contact.jsx
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // ✅ handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ validate form
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // ✅ handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // reset
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      {submitted && <p className="success-msg">Thanks! I’ll get back to you soon 🚀</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send Message</button>
      </form>

      {/* ✅ Social Links & Contact Info */}
      <div className="contact-info">
        <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
        <p>Phone: +66 81-234-5678</p>
        <div className="social-links">
          <a href="https://github.com/yourgithub" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank">LinkedIn</a>
          <a href="https://twitter.com/yourtwitter" target="_blank">Twitter</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
