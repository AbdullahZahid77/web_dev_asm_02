import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    people: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const formStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "20px",
    maxWidth: "700px",
    margin: "auto",
    borderRadius: "10px",
    textAlign: "left"
  };

  const headingStyle = {
    color: "#e1b875",
    fontSize: "2rem",
    borderBottom: "2px solid #e1b875",
    paddingBottom: "10px",
    marginBottom: "20px"
  };

  const inputStyle = {
    backgroundColor: "transparent",
    border: "1px solid #e1b875",
    color: "#fff",
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "5px",
    width: "100%",
    marginBottom: "20px"
  };

  const textareaStyle = {
    ...inputStyle,
    height: "100px"
  };

  const buttonStyle = {
    backgroundColor: "#e1b875",
    color: "#000",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
    display: "block",
    margin: "auto"
  };

  const buttonHoverStyle = {
    backgroundColor: "#d4a14a"
  };

  return (
    <div style={formStyle}>
      <h2 style={headingStyle}>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <input
            type="number"
            name="people"
            placeholder="# of people"
            value={formData.people}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
          ></textarea>
        </div>

        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Book a Table
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
