import { GrContact } from "react-icons/gr";

export default function ContactDetails() {
  return (
    <div className="contact-details">
      <img src="/assets/contact-info.jpg" alt="Contact Details" />
      <div className="contact-text">
        <h2>
          We want to hear what you have to tell us... <GrContact />
        </h2>

        <div>
          <h4>Customer Support:</h4>
          <p>Email: support@simplestore.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>

        <div>
          <h4>Business Inquiries:</h4>
          <p>Email: partnerships@simplestore.com</p>
          <p>Phone: (555) 987-6543</p>
        </div>
      </div>
    </div>
  );
}
