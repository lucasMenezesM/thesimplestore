import Banner from "../../../components/Banner/Banner";
import ContactDetails from "../Components/ContactDetails";
import { FaWalking } from "react-icons/fa";
import "./Style.css";
import Map from "../Components/Map";
import ContactSupport from "../Components/ContactSupport";

export default function Contact() {
  return (
    <>
      <Banner
        title={"Contact Us Bellow"}
        imgUrl={"assets/contact-banner.jpg"}
      />
      <div className="contact-page">
        <ContactDetails />

        <ContactSupport />

        <Map />
      </div>
    </>
  );
}
