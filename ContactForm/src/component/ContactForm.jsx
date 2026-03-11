import React, { useState } from "react";
import SubmitedForm from "./SubmitedForm";

const ContactForm = () => {

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitform, setSubmitForm] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formdata,
      [name]: value
    });
  };


  const validate = () => {

    let newErrors = {};

    if (!formdata.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formdata.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formdata.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!formdata.phone.trim()) {
      newErrors.phone = "Phone number required";
    } else if (formdata.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formdata.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formdata.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };


  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitForm(true);
    }
  };


  if (submitform) {
    return <SubmitedForm  data={formdata}/>;
  }


  return (

    <div className="container">

      <h1>✅ Contact Form</h1>

      <form className="form" onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>


        <div className="input-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formdata.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>


        <div className="input-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formdata.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>


        <div className="input-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formdata.subject}
            onChange={handleChange}
            className={errors.subject ? "error-input" : ""}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>


        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            value={formdata.message}
            onChange={handleChange}
            className={errors.message ? "error-input" : ""}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
};

export default ContactForm;