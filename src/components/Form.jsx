import React, { useState } from 'react'

const Form = () => {
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

    const showFromHandler = ()=>{
        setShowForm(true)
    }

    const onChangeHandler = (e)=>{
        let{name, value} = e.target
        setInputValue({...inputValue, [name]:value})
    }

    const addcancelButtonHandler = ()=>{
        setShowForm(false)
    }

    const onSubmitHandler = (e)=>{
        e.preventDefault()
    }

    // console.log(inputValue);

  return (
    <div>
        <button onClick={showFromHandler}>Add New User</button>
      {
        showForm && (
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="f-name">First Name</label>
                <input type="text" id='f-name' placeholder='Enter your First Name' name='FirstName' value={inputValue.FirstName} onChange={onChangeHandler}/>
                <label htmlFor="l-name">Last Name</label>
                <input type="text" id='l-name' placeholder='Enter your Last Name' name='LastName' value={inputValue.LastName} onChange={onChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input type="number" id='age' placeholder='Enter your Age'name='Age' value={inputValue.Age} onChange={onChangeHandler}/>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id='dob'name='DOB' value={inputValue.DOB} onChange={onChangeHandler}/>
                <label htmlFor="gender">Gender</label>
                <input type="radio" id='male' name='Gender' value={inputValue.Gender} onChange={onChangeHandler}/>Male
                <input type="radio" id='female' name='Gender' value={inputValue.Gender} onChange={onChangeHandler}/>Female
                <label htmlFor="phone">Phone</label>
                <input type="tel" id='phone' placeholder='Enter your phone number' name='Phone' value={inputValue.Phone} onChange={onChangeHandler}/>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Enter your Email id' name='Email' value={inputValue.Email} onChange={onChangeHandler}/>
                <label htmlFor="Address">Address</label>
                <input type="text" id='Address' placeholder='Enter your Address' name='Address' value={inputValue.Address} onChange={onChangeHandler}/>
                <label htmlFor="city">City</label>
                <input type="text" id='city' placeholder='Enter your city' name='City' value={inputValue.City} onChange={onChangeHandler}/>
                <label htmlFor="state">State</label>
                <input type="text" id='state' placeholder='Enter your State' name='State' value={inputValue.State} onChange={onChangeHandler}/>
                <label htmlFor="zip">Zipcode</label>
                <input type="number" id='zip' placeholder='Enter your Zipcode' name='Zipcode' value={inputValue.Zipcode} onChange={onChangeHandler}/>
                <label htmlFor="country">Country</label>
                <input type="text" id='country' placeholder='Enter your Country' name='Country' value={inputValue.Country} onChange={onChangeHandler}/>
                <label htmlFor="dept">Department</label>
                <input type="text" id='dept' placeholder='Enter your Department' name='Department' value={inputValue.Department} onChange={onChangeHandler}/>
                <label htmlFor="title">Title</label>
                <input type="text" id='title' placeholder='Enter your Title' name='Title' value={inputValue.Title} onChange={onChangeHandler}/>
                <label htmlFor="company-name">Company Name</label>
                <input type="text" id='company-name' placeholder='Enter your Company' name='CompanyName' value={inputValue.CompanyName} onChange={onChangeHandler}/>
                <button onClick={addcancelButtonHandler}>Add</button>
                <button onClick={addcancelButtonHandler}>Cancel</button>
            </form>
        )
      }
    </div>
  )
}

export default Form
