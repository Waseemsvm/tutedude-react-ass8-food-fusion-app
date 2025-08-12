import { toast } from "react-toastify";
import ContactPageStyles from "../styles/ContactPage.module.css";
import { useState } from "react";

export default function ContactPage() {
  const notify = () =>
    toast.info("We'll get in touch shortly!!", {
      autoClose: 800,
    });

  const initialFormData = {
    full_name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    let data = {
      ...formData,
      [e.target.id]: e.target.value,
    };
    setFormData(data);
  };

  return (
    <div className={ContactPageStyles.container}>
      <h1>Get in Touch with Food Fusion</h1>
      <p className={ContactPageStyles.intro}>
        We'd love to hear from you! Whether you have a question about our menu,
        want to place an order, or just want to share your feedback, our team is
        here to help. Your satisfaction is our top priority.
      </p>
      <h3>Contact Information</h3>
      <ul className={ContactPageStyles["contact-info"]}>
        <li>
          <strong>📍 Address :</strong> Food Fusion Restaurant, 45 Gourmet
          Street, Mumbai, India
        </li>
        <li>
          <strong>📞 Phone :</strong> +91 98765 43210
        </li>
        <li>
          <strong> 📧 Email :</strong> support@foodfusion.com{" "}
        </li>
        <li>
          <strong>🕒 Business Hours :</strong> Mon - Fri: 9:00 AM - 11:00 PM Sat
          - Sun: 8:00 AM - 12:00 Midnight
        </li>
      </ul>
      <div className={ContactPageStyles["contact-info-cont"]}>
        <p className={ContactPageStyles["contact-info-header"]}>
          If you'd like to reach us online, simply fill out our contact form and
          we'll respond as soon as possible.
        </p>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setFormData({ ...initialFormData });
            notify();
          }}
          className={ContactPageStyles["contact-info-form"]}
        >
          <div>
            <label htmlFor="full_name">Full Name: </label>
            <input
              required
              id="full_name"
              type="text"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" required>
              Email Address:{" "}
            </label>
            <input
              id="email"
              required
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="mobile">Phone Number: </label>
            <input
              id="mobile"
              required
              type="tel"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject: </label>
            <input
              required
              id="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message: </label>
            <textarea
              name=""
              id="message"
              cols={25}
              rows={5}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
