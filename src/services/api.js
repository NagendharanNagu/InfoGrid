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