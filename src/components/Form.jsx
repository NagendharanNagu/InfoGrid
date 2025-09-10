import React, { useState } from "react";
import "../style/form.css";
import axios from "axios";
import { addUser } from "../services/api";

const Form = ({ showForm, setShowForm, inputValue, setInputValue, getUserData, showFromHandler, selectedUser, setSelectedUser }) => {
  
  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const addUserHandler = async () =>{
      await addUser(inputValue)
      setInputValue({
        FirstName: "",
        LastName: "",
        Age: "",
        DOB: "",
        Gender: "",
        Phone: "",
        Email: "",
        Address: "",
        City: "",
        State: "",
        Zipcode: "",
        Country: "",
        Department: "",
        Title: "",
        CompanyName: ""
    })
    addcancelButtonHandler()
    getUserData()
  }
  console.log(import.meta.env.VITE_API_URL);
  
  const addcancelButtonHandler = () => {
    setShowForm(false);
  };

  

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  console.log(inputValue);

  return (
    <div>
      {selectedUser? 
      <button onClick={showFromHandler} className="add-btn">Update User</button> :
      <button onClick={showFromHandler} className="add-btn">Add New User</button> 
      }
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-card">
            <div className="modal-header">
              <h2>Add New User</h2>
              <button className="close-btn" onClick={addcancelButtonHandler}>
                ✖
              </button>
            </div>
            <form onSubmit={onSubmitHandler} className="modal-form">
              <div>
                <label htmlFor="f-name">First Name <span>*</span></label>
              <input
                type="text"
                id="f-name"
                placeholder="Enter your First Name"
                name="FirstName"
                value={inputValue.FirstName}
                onChange={onChangeHandler}
              />
              </div>
              <div>
              <label htmlFor="l-name">Last Name <span>*</span></label>
              <input
                type="text"
                id="l-name"
                placeholder="Enter your Last Name"
                name="LastName"
                value={inputValue.LastName}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="age">Age <span>*</span></label>
              <input
                type="number"
                id="age"
                placeholder="Enter your Age"
                name="Age"
                value={inputValue.Age}
                onChange={onChangeHandler}
              />
              </div>
              <div>
              <label htmlFor="dob">Date of Birth <span>*</span></label>
              <input
                type="date"
                id="dob"
                name="DOB"
                value={inputValue.DOB}
                onChange={onChangeHandler}
              />
              </div>
              <div>
              <label htmlFor="gender">Gender <span>*</span></label><br />
                  <input
                    type="radio"
                    name="Gender"
                    value="Male"
                    checked={inputValue.Gender === "Male"}
                    onChange={onChangeHandler}
                  />{" "}
                  Male
                  <input
                    type="radio"
                    name="Gender"
                    value="Female"
                    checked={inputValue.Gender === "Female"}
                    onChange={onChangeHandler}
                  />{" "}
                  Female
                </div>
              <div>
                <label htmlFor="phone">Phone <span>*</span></label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                name="Phone"
                value={inputValue.Phone}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="email">Email <span>*</span></label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email id"
                name="Email"
                value={inputValue.Email}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="Address">Address</label>
              <input
                type="text"
                id="Address"
                placeholder="Enter your Address"
                name="Address"
                value={inputValue.Address}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                name="City"
                value={inputValue.City}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                placeholder="Enter your State"
                name="State"
                value={inputValue.State}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="zip">Zipcode</label>
              <input
                type="number"
                id="zip"
                placeholder="Enter your Zipcode"
                name="Zipcode"
                value={inputValue.Zipcode}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                placeholder="Enter your Country"
                name="Country"
                value={inputValue.Country}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="dept">Department</label>
              <input
                type="text"
                id="dept"
                placeholder="Enter your Department"
                name="Department"
                value={inputValue.Department}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                placeholder="Enter your Title"
                name="Title"
                value={inputValue.Title}
                onChange={onChangeHandler}
              />
              </div>
              <div>
                <label htmlFor="company-name">Company Name</label>
              <input
                type="text"
                id="company-name"
                placeholder="Enter your Company"
                name="CompanyName"
                value={inputValue.CompanyName}
                onChange={onChangeHandler}
              />
              </div>
              <div className="modal-actions">
                <button onClick={addUserHandler} className="add-btn">
                  Add
                </button>
                <button onClick={addcancelButtonHandler} className="cancel-btn">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
