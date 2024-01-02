import Banner from "../../components/Banner/Banner";
import "./Style.css";
import { GrContact } from "react-icons/gr";
import { FaWalking } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Banner
        title={"Contact Us Bellow"}
        imgUrl={"assets/contact-banner.jpg"}
      />
      <div className="contact-page">
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

        <h3>
          Come visit us: <FaWalking />
        </h3>

        <div className="map">
          <iframe
            className="storeMap"
            title="location simple Store"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48387.851678863924!2d-74.09150005136718!3d40.712716799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1b0cd3c8cb%3A0xf4ba617cb0ddc07!2sBrookfield%20Place!5e0!3m2!1spt-BR!2sbr!4v1704205705697!5m2!1spt-BR!2sbr"
            width="900"
            height="480"
            // style="border:0;"
            allowfullscree
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
