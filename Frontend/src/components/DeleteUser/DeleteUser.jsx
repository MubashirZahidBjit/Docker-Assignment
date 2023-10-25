import React, { useState } from "react";
import Button from "../Button/Button";
// import "./DeleteUser.css";
import useUserHook from "../../hooks/useUserHook";
import { useParams } from "react-router-dom";

const DeleteUser = () => {
  const { id } = useParams();
  const { deleteUser } = useUserHook();

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    if (id) {
      deleteUser(id);
      setIsDeleted(true);
    } else {
      setIsDeleted(false);
    }
  };

  return (
    <div className="delete-user-container">
      <h1>Delete User By ID</h1>
      <p>Enter User ID to delete:</p>
      <input type="text" placeholder="User ID" value={id} disabled={true} />
      {isDeleted && (
        <p className="success-message">User Deleted Successfully!</p>
      )}
      <Button
        text="Delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red", color: "white" }}
      />
    </div>
  );
};

export default DeleteUser;
