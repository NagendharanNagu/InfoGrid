import React, { useEffect, useState } from 'react'
import {getUsers} from "../services/api"
import Table from "../components/Table"
import Form from '../components/Form'
import axios from 'axios'

const UsersPage = () => {
  const [user, setUser] = useState([])
  const[showForm, setShowForm]=useState(false)
  const[inputValue, setInputValue] = useState({
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

    useEffect(() => {
  getUsers().then((data) => {
    setUser(data);
  });
}, []);

  
  return (
    <div>
      <h1>User Directory</h1>
      <Form user = {user} showForm = {showForm} setShowForm={setShowForm} inputValue={inputValue} setInputValue={setInputValue}/>
      <Table user={user}/>
    </div>
  )
}

export default UsersPage
