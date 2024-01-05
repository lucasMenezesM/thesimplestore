import ConctactForm from "./ContactForm";

export default function ContactSupport() {
  return (
    <div className="contact-support">
      <h3>Have some doubt or suggestion? Send us a message!</h3>
      <div className="container">
        <div className="contact-form">
          <ConctactForm />
        </div>
        <img src="/assets/costumer-support.png" alt="support" />
      </div>
    </div>
  );
}
