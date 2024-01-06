import { ErrorMessage, Field } from "formik";
import "./Input.css";

function Error({ children }) {
  return <div className="contact-page__error-message">{children}</div>;
}

export default function Input({ name, label, type, as }) {
  return (
    <div className="contact-page__input">
      <label>{label}</label>
      <Field name={name} id={name} type={type} as={as} />
      <ErrorMessage component={Error} name={name} />
    </div>
  );
}
