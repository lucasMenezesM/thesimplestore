import Banner from "../../components/Banner/Banner";
import Button from "../../components/Button/Button";
import { GrContact } from "react-icons/gr";
import { FaWalking } from "react-icons/fa";
import "./Style.css";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userText, setUserText] = useState("");
  const [inputError, setInputError] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name) setInputError("Please, fill your name");
    // if (!phone) setInputError("Please, fill your phone field");

    if (inputError.length > 0) return;

    alert("Message Sent Successfully");
  }

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

        <div className="contact-support">
          <h3>Have some doubt or suggestion? Send us a message!</h3>
          <div className="container">
            <div className="contact-form">
              <form onSubmit={(e) => handleFormSubmit(e)}>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>What's in your mind?</label>
                <textarea
                  value={userText}
                  onChange={(e) => setUserText(e.target.value)}
                ></textarea>
                <label></label>
                <Button bgColor="white" textColor="black">
                  Send
                </Button>
              </form>
            </div>
            <img src="/assets/costumer-support.png" alt="support" />
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
