import React, { useState } from "react";
import "./Book.css"; // External CSS for styling

const Booking = () => {
  // Initial state setup for form data
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    date: "",
    option: "",
    time:"",
  });

  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handler for the save button
  const handleSave = () => {
    console.log("Saved Data:", formData);
    // You can save the data in a backend or use it further here
  };

  return (
    <div className="form-container">
      <h1 className="a">Detail Form</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="double"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <label htmlFor="option">Choose the route:</label>
        <select
          id="option"
          name="option"
          value={formData.option}
          onChange={handleChange}
        >
          <option value="">Select the route</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
          <option value="Option 4">Option 4</option>
        </select>

        <label htmlFor="time">Choose the time:</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        >
          <option value="">Select the time</option>
          <option value="6">6 AM</option>
          <option value="8">8 AM</option>
          <option value="10">10 AM</option>
          </select>

        <div className="buttons">
          <button
            type="button"
            onClick={handleSave}
            className="save-button"
          >
            Save
          </button>
        </div>

        <div className="buttons">
          <button
            type="button"
            onClick={handleSave}
            className="book-button"
          >
            Book 
          </button>
        </div>

      </form>
    </div>
  );
};

export default Booking;
