import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import useUserHook from "../../hooks/useUserHook";
import Button from "../Button/Button";
import "./GetAllUsers.css";

const GetAllUsers = () => {
  const { userData } = useUserHook();

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>All Users</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Balance</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userData.data &&
            userData.data.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.balance}</td>
                <td>{user.phone}</td>
                <td>
                  <Link to={`/update-user/${user._id}`}>
                    {/* Pass the user ID as a parameter in the URL */}
                    <Button
                      text="Edit"
                      style={{ backgroundColor: "#007bff", color: "white" }}
                    />
                  </Link>
                </td>
                <td>
                  <Link to={`/delete-user/${user._id}`}>
                    {" "}
                    {/* Link to user delete page */}
                    <Button
                      text="Delete"
                      style={{ backgroundColor: "red", color: "white" }}
                    />
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllUsers;
