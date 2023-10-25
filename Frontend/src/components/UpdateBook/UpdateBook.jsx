import React, { useState } from "react";
import useBookHook from "../../hooks/useBookHook";
import "./UpdateBook.css";

const UpdateBook = () => {
  const { updateBook } = useBookHook();
  const [bookId, setBookId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookPrice, setBookPrice] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookStock, setBookStock] = useState("");
  const [bookDescription, setBookDescription] = useState("");
  const [bookDiscountStartDate, setBookDiscountStartDate] = useState("");
  const [bookDiscountEndDate, setBookDiscountEndDate] = useState("");
  const [bookDiscountedPrice, setBookDiscountedPrice] = useState("");
  const [bookReleaseDate, setBookReleaseDate] = useState("");

  const handleUpdate = () => {
    if (bookId) {
      const updatedData = {
        title: bookTitle,
        price: bookPrice,
        author: bookAuthor,
        stock: bookStock,
        description: bookDescription,
        discount_start_date: bookDiscountStartDate,
        discount_end_date: bookDiscountEndDate,
        discounted_price: bookDiscountedPrice,
        release_date: bookReleaseDate,
      };
      updateBook(bookId, updatedData);
      setBookId("");
    }
  };

  return (
    <div className="update-book-container">
      <h1>Update Book By ID</h1>
      <p>Enter Book ID to update:</p>
      <input
        type="text"
        placeholder="Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <p>Enter new title:</p>
      <input
        type="text"
        placeholder="New title"
        value={bookTitle}
        onChange={(e) => setBookTitle(e.target.value)}
      />
      <p>Enter new price:</p>
      <input
        type="number"
        placeholder="New price"
        value={bookPrice}
        onChange={(e) => setBookPrice(e.target.value)}
      />
      <p>Enter new author:</p>
      <input
        type="text"
        placeholder="New author"
        value={bookAuthor}
        onChange={(e) => setBookAuthor(e.target.value)}
      />
      <p>Enter new stock:</p>
      <input
        type="number"
        placeholder="New stock"
        value={bookStock}
        onChange={(e) => setBookStock(e.target.value)}
      />
      <p>Enter new description:</p>
      <textarea
        placeholder="New description"
        value={bookDescription}
        onChange={(e) => setBookDescription(e.target.value)}
      />
      <p>Enter new discount start date:</p>
      <input
        type="date"
        placeholder="New discount start date"
        value={bookDiscountStartDate}
        onChange={(e) => setBookDiscountStartDate(e.target.value)}
      />
      <p>Enter new discount end date:</p>
      <input
        type="date"
        placeholder="New discount end date"
        value={bookDiscountEndDate}
        onChange={(e) => setBookDiscountEndDate(e.target.value)}
      />
      <p>Enter new discounted price:</p>
      <input
        type="number"
        placeholder="New discounted price"
        value={bookDiscountedPrice}
        onChange={(e) => setBookDiscountedPrice(e.target.value)}
      />
      <p>Enter new release date:</p>
      <input
        type="number"
        placeholder="New release date"
        value={bookReleaseDate}
        onChange={(e) => setBookReleaseDate(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateBook;
