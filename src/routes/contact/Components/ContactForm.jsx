import { useState } from "react";
import Button from "../../../components/Button/Button";
export default function ConctactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userText, setUserText] = useState("");
  const [inputError, setInputError] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!name) return setInputError("name");
    if (!email) return setInputError("email");
    if (!userText) return setInputError("userText");
    if (!phone) return setInputError("phone");

    alert("Message Sent Successfully");
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <label>
        Name: {inputError === "name" && <span>Fill your name!</span>}
      </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>
        Email: {inputError === "email" && <span>Enter your email!</span>}{" "}
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>
        Phone: {inputError === "phone" && <span>Enter your phone number!</span>}{" "}
      </label>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label>
        What's in your mind?{" "}
        {inputError === "userText" && <span>Enter your message bellow.</span>}
      </label>
      <textarea
        value={userText}
        onChange={(e) => setUserText(e.target.value)}
      ></textarea>
      <label></label>
      <Button padding="8px" width="140px" bgColor="white" textColor="black">
        Send
      </Button>
      {/* <button>Send</button> */}
    </form>
  );
}
