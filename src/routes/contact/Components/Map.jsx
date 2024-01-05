import { FaWalking } from "react-icons/fa";

export default function Map() {
  return (
    <>
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
          allowfullscree="true"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
