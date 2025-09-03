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

    

  useEffect(()=>{
    // getUsers().then(setUser)

    const dummyUsers = user.map((u)=>({
      FirstName: u.firstName,
      LastName:u.lastName,
      Age: u.age,
      DOB: u.birthDate,
      Gender: u.gender,
      Phone: u.phone,
      Email: u.email,
      Address: u.address.address,
      City: u.address.city,
      State: u.address.state,
      Zipcode: u.address.postalCode,
      Country: u.address.country,
      Department: u.company.department,
      Title: u.company.title,
      CompanyName:u.company.name
  }))
  setUser(dummyUsers);

    // To push the existing data to backend (MongoDB)
      axios.post("http://localhost:5000/users", dummyUsers)
      .then(res => console.log("Inserted Users: ", res.data))
      .catch(err => console.log("Insert Error: ",err)
      )
   
  },[])

  console.log(user);
  
  return (
    <div>
      <h1>User Directory</h1>
      <Form user = {user} showForm = {showForm} setShowForm={setShowForm} inputValue={inputValue} setInputValue={setInputValue}/>
      <Table user={user}/>
    </div>
  )
}

export default UsersPage
