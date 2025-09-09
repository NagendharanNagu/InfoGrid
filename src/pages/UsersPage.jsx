import React, { useEffect, useState } from "react";
import { getUsers,deleteUser } from "../services/api";
import Table from "../components/Table";
import Form from "../components/Form";
import axios from "axios";

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

  useEffect(() => {
   getUserData()
  }, []);

    //Fetching the data from the DB
    const getUserData = ()=>{
       // Fetch users from BE
      getUsers().then((data) => {
      setUser(data);
    });
    }

    // Delete users from DB
    const handleDelete = async(id)=>{
      try{
        await deleteUser(id)
        // updating the UI after deleting 
        setUser(user.filter((u)=>u.id !== id))
        getUserData()
      }
      catch(error){
        console.error("Error deleting user:", error);
      }
    }

    const deletePrompt = (id)=>{
      window.prompt("Are you sure wants to delete..?")
      handleDelete(id)
    }

  return (
    <div>
      <h1>User Directory</h1>
      <Form
        user={user}
        showForm={showForm}
        setShowForm={setShowForm}
        inputValue={inputValue}
        setInputValue={setInputValue}
        getUserData = {getUserData}
      />
      <Table user={user} handleDelete={handleDelete} deletePrompt={deletePrompt}/>
    </div>
  );
};

export default UsersPage;
