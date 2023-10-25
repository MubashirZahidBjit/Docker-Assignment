import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance"; // Replace with your axios instance setup

const useUserHook = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/user/api/getAllUsers")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const createUser = (formData) => {
    axiosInstance
      .post("/users/api/create", formData) // Replace with the endpoint for creating users
      .then((response) => {
        console.log("Successfully created user:", response.data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const deleteUser = (userId) => {
    axiosInstance
      .delete(`/user/api/deleteUser/${userId}`) // Replace with the endpoint for deleting users
      .then((response) => {
        console.log("Successfully deleted user:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const updateUser = (userId, updatedData) => {
    axiosInstance
      .put(`/user/api/updateUser/${userId}`, updatedData) // Replace with the endpoint for updating users
      .then((response) => {
        console.log("Successfully updated user:", response.data);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return {
    userData,
    createUser,
    updateUser,
    deleteUser,
  };
};

export default useUserHook;
