import React from 'react'

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
          user.map((u)=>(
            <tr key={u.id}>
              {/* <td>{u.id}</td> */}
              <td>{u.firstName}</td>
              <td>{u.lastName}</td>
              <td>{u.age}</td>
              <td>{u.birthDate}</td>
              <td>{u.gender}</td>
              <td>{u.phone}</td>
              <td>{u.email}</td>
              <td>{u.address.address}</td>
              <td>{u.address.city}</td>
              <td>{u.address.state}</td>
              <td>{u.address.postalCode}</td>
              <td>{u.address.country}</td>
              <td>{u.company.department}</td>
              <td>{u.company.title}</td>
              <td>{u.company.name}</td>
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
