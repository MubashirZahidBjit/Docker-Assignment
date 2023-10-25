import React, { useState } from "react";
import Button from "../Button/Button"; // Import the Button component
import "./DeleteBook.css"; // Import the corresponding CSS file
import useBookHook from "../../hooks/useBookHook";

const DeleteBook = () => {
  const { deleteBook } = useBookHook();
  const [bookId, setBookId] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    if (bookId) {
      deleteBook(bookId);
      setIsDeleted(true);
      setBookId("");
    }
  };

  return (
    <div className="delete-book-container">
      <h1>Delete Book By ID</h1>
      <p>Enter Book ID to delete:</p>
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      {isDeleted && (
        <p className="success-message">Book Deleted Successfully!</p>
      )}
      <Button
        text="Delete"
        onClick={handleDelete}
        style={{ backgroundColor: "red", color: "white" }}
      />
    </div>
  );
};

export default DeleteBook;
