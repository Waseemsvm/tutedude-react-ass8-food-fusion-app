import ContactPageStyles from "../styles/ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className={ContactPageStyles.container}>
      <h3>Get in Touch with Food Fusion</h3>
      <p className={ContactPageStyles.intro}>
        We'd love to hear from you! Whether you have a question about our menu,
        want to place an order, or just want to share your feedback, our team is
        here to help. Your satisfaction is our top priority.
      </p>
      Contact Information
      <ul>
        <li>
          📍 Address: Food Fusion Restaurant, 45 Gourmet Street, Mumbai, India
        </li>
        <li>📞 Phone: +91 98765 43210</li>
        <li> 📧 Email: support@foodfusion.com </li>
        <li>
          🕒 Business Hours: Mon - Fri: 9:00 AM - 11:00 PM Sat - Sun: 8:00 AM -
          12:00 Midnight
        </li>
      </ul>
      <div>
        <p>
          If you'd like to reach us online, simply fill out our contact form and
          we'll respond as soon as possible.
        </p>
        <form action="">
          <div>
            <label htmlFor="">Full Name: </label>
            <input />
          </div>
          <div>
            <label htmlFor="">Email Address: </label>
            <input />
          </div>
          <div>
            <label htmlFor="">Phone Number: </label>
            <input />
          </div>
          <div>
            <label htmlFor="">Subject: </label>
            <input />
          </div>
          <div>
            <label htmlFor="">Message: </label>
            <input />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
