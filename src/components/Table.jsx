import React from 'react'
import moment from "moment"


const Table = ({user}) => {
  console.log(user);
  
  return (
    <table>
      <thead>
      <tr>
        {/* <th>S.No</th> */}
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>DOB</th>
        <th>Gender</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Address</th>
        <th>City</th>
        <th>State</th>
        <th>Zipcode</th>
        <th>Country</th>
        <th>Department</th>
        <th>Title</th>
        <th>Company Name</th>
        <th>Action</th>
      </tr>
    </thead>
      <tbody>
        { user ? 
          user?.map((u)=>(
            <tr key={u._id}>
              {/* <td>{u.id}</td> */}
              <td>{u.FirstName}</td>
              <td>{u.LastName}</td>
              <td>{u.Age}</td>
              <td>{moment(u.DOB)?.format("DD-MM-YYYY")}</td>
              <td>{u.Gender}</td>
              <td>{u.Phone}</td>
              <td>{u.Email}</td>
              <td>{u.Address}</td>
              <td>{u.City}</td>
              <td>{u.State}</td>
              <td>{u.Zipcode}</td>
              <td>{u.Country}</td>
              <td>{u.Department}</td>
              <td>{u.Title}</td>
              <td>{u.CompanyName}</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
            </tr>
          )) : null
        }
      </tbody>
    </table>
  )
}

export default Table
