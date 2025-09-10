import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/api";
import Table from "../components/Table";
import Form from "../components/Form";
import moment from "moment";


const UsersPage = () => {
  const [user, setUser] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [inputValue, setInputValue] = useState({
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
    CompanyName: "",
  });
  const [selectedUser, setSelectedUser] = useState(null);
  


   useEffect(() => {
    getUserData();
  }, []);

  //Fetching the data from the DB
  const getUserData = () => {
    // Fetch users from BE
    getUsers().then((data) => {
      setUser(data);
    });
  };

   const showFromHandler = () => {
    setShowForm(true);
  };

  const editUserHandler = (user) => {
    // console.log(user)
    setInputValue({
      FirstName: user.FirstName,
      LastName: user.LastName,
      Age: user.Age,
      DOB: moment(user.DOB).format("YYYY-MM-DD"),
      Gender: user.Gender,
      Phone: user.Phone,
      Email: user.Email,
      Address: user.Address,
      City: user.City,
      State: user.State,
      Zipcode: user.Zipcode,
      Country: user.Country,
      Department: user.Department,
      Title: user.Title,
      CompanyName: user.CompanyName,
    });
    showFromHandler();
  };

  // Update the user details and push it to DB
  const updateUserHandler = async () =>{

  }

  // Delete users from DB
  const deleteUserHandler = async (id) => {
    try {
      await deleteUser(id);
      // updating the UI after deleting
      setUser(user.filter((u) => u.id !== id));
      getUserData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  //* this function needs to be conditionally called based on the action delete/update
  const deletePrompt = (id) => {
    const confirmDelete = window.confirm("Are you sure wants to delete..?");
    if (confirmDelete) {
      deleteUserHandler(id)
    }
  };

  return (
    <div>
      <h1>User Directory</h1>
      <Form
        user={user}
        showForm={showForm}
        setShowForm={setShowForm}
        inputValue={inputValue}
        setInputValue={setInputValue}
        getUserData={getUserData}
        showFromHandler={showFromHandler}
        selectedUser = {selectedUser}
        setSelectedUser = {setSelectedUser}
        updateUserHandler = {updateUserHandler}
      />
      <Table
        user={user}
        deleteUserHandler={deleteUserHandler}
        deletePrompt={deletePrompt}
        editUserHandler={editUserHandler}
      />
    </div>
  );
};

export default UsersPage;
