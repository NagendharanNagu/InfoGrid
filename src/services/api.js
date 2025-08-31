import axios from "axios";

const API_BASE_URL = "https://dummyjson.com/users"

export const getUsers = async ()=>{
    try{
        const response = await axios.get(API_BASE_URL)
        console.log(response.data.users);
        return response.data.users;
    }
    catch(error){
        console.log("Error fetching the user:",error);
        return null;
    }
}

export const addUsers = async () =>{
    try{
        // Logic to Add user
    }
    catch(error){
        console.log("Error adding the user:",error);
        return null;
    }
}

export const deleteUsers = async () =>{
    try{
        // Logic to Delete users
    }
    catch(error){
        console.log("Error deleting the user:",error);
        return null;
    }
}