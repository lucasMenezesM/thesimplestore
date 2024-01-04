import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="contact-footer">
          <h4>Customer Support:</h4>
          <p>Email: support@simplestore.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="business-inquires">
          <h4>Business Inquiries:</h4>
          <p>Email: partnerships@simplestore.com</p>
          <p>Phone: (555) 987-6543</p>
        </div>
        <div className="adress">
          <h4>Visit Us: </h4>
          <p>1234 Imaginary Street, Suite 567</p>
          <p>Fictional City, FC 12345</p>
          <p>Country of Dreams</p>
        </div>
      </div>

      <div className="credits">
        <h4>Developed By: Lucas Menezes {"</>"}</h4>
        <p>Built with React JS </p>
        <p>Using the Fake Store API</p>
      </div>
    </footer>
  );
};

export default Footer;
