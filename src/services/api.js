import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL

export const getUsers = async ()=>{
    try{
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/UserDB/Getuser`)
        console.log(response);
        return response.data.data;
    }
    catch(error){
        console.log("Error fetching the user:",error);
        return null;
    }
}

// getUsers()

