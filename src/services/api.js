import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const addUser = async (inputValue) => {
  await axios
    .post(`${API_BASE_URL}/UserDB/Addusers`,inputValue)
    .then((res) => console.log("Inserted Users: ", res.data))
    .catch((err) => console.log("Insert Error: ", err));
};

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/UserDB/Getuser`);
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log("Error fetching the user:", error);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    console.log(id, "Checking the id");
    const response = await axios.delete(
      `${API_BASE_URL}/UserDB/Deleteusers?id=${id}`
    );
    console.log(response);
    return response.data.data;
  } catch (error) {
    console.log("Error deleting the user:", error);
    return null;
  }
};

// getUsers()
