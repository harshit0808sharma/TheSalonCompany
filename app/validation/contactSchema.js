  import * as Yup from "yup";
  
  export const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").required("Full Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone Number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    service: Yup.string().required("Please select a service"),
    date: Yup.date().required("Please select a date"),
    time: Yup.string().required("Please select a time"),
    message: Yup.string().min(5, "Message too short").required("Message is required"),
  });