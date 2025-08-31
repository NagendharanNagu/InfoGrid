import React, { useEffect, useState } from 'react'
import {getUsers} from "../services/api"
import Table from "../components/Table"
import Form from '../components/Form'

const UsersPage = () => {
  const [user, setUser] = useState([])

  useEffect(()=>{
    getUsers().then(setUser)
  },[])

  // console.log(user);
  
  return (
    <div>
      <h1>User Directory</h1>
      <Form/>
      <Table user={user}/>
    </div>
  )
}

export default UsersPage
