import { Formik, Form } from "formik";
import * as Yup from "yup";
import Button from "../../../components/Button/Button";
import Input from "./Input";

export default function ConctactForm() {
  return (
    <Formik
      initialValues={{ name: "", phone: "", email: "", description: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("This field is required"),
        phone: Yup.string()
          .min(13, "Must have at least 13 digits")
          .required("This field is required"),
        email: Yup.string()
          .required("This field is required")
          .email("Type a valid email"),
        description: Yup.string()
          .required("This field is required")
          .max(200, "Must have a maximum of 200 characters"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(JSON.stringify(values));
        setSubmitting(false);
      }}
    >
      <Form>
        <Input name={"name"} label={"Enter your name"} />
        <Input name={"email"} label={"Enter your email"} />
        <Input name={"phone"} label={"Enter your phone"} />
        <Input
          name={"description"}
          label={"Give us all the details"}
          type={"textarea"}
          as={"textarea"}
        />
        <Button padding="10px" bgColor="white" textColor="black" type="submit">
          SEND
        </Button>
      </Form>
    </Formik>
  );
}
