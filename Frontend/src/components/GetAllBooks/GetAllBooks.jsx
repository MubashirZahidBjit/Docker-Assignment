import React, { useEffect, useState } from "react";
import useBookHook from "../../hooks/useBookHook";
import Button from "../Button/Button";
import CartTotal from "../Cart/CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cart";
import { Link } from "react-router-dom";
import myImage from "../../assets/Book_pic.jpg";
import axiosInstance from "../../utils/axiosInstance";
import { loginUser } from "../../utils/userSlice";
import { decodeToken } from "react-jwt";
import Banner from "../Banner/Banner";
import { useNavigate } from "react-router-dom";

const GetAllBooks = () => {
  const { bookData } = useBookHook();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const myToken = localStorage.getItem("token");
  const userInfo = decodeToken(myToken);

  const [sortedBooks, setSortedBooks] = useState([]); // State for sorted books

  const handleAddToCart = (book) => {
    if (userInfo.role !== 2) {
      navigate("/login");
    } else {
      axiosInstance.post(`/cart/api/addToCart`, {
        userId: userInfo.id,
        bookId: book._id,
        quantity: 1,
      });
      console.log(book._id);
      console.log(userInfo.id);
      dispatch(addToCart(book));
    }
  };

  // Function to sort books by price
  const sortBooksByPrice = () => {
    const sorted = [...bookData.data]; // Create a copy of the bookData
    sorted.sort((a, b) => a.price - b.price); // Sort by price
    setSortedBooks(sorted); // Update the sortedBooks state
  };

  useEffect(() => {
    if (bookData) {
      // console.log("From GetAllBooks.jsx ", bookData.data);
    }
  }, [bookData]);

  return (
    <div>
      <Banner />
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>All Books</h1>
      {/* Use the Button component for the sorting button with a smaller width */}
      <Button
        text="Sort By Price"
        style={{
          backgroundColor: "green",
          color: "white",
          width: "100px",
          display: "flex",
          textAlign: "center",
          justifyContent: "left",
          marginLeft: "150px",
        }}
        onClick={sortBooksByPrice}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {sortedBooks.length > 0
          ? sortedBooks.map((book, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                }}
              >
                <img
                  src={
                    book.image
                      ? `http://127.0.0.1:8000/file/get/${
                          book.image.split("/")[1]
                        }`
                      : myImage
                  }
                  alt={book.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>Price: ${book.price}</p>
                <Link to="add-to-cart">
                  <Button
                    text="Add to Cart"
                    style={{ backgroundColor: "green", color: "white" }}
                    onClick={() => handleAddToCart(book)}
                  />
                </Link>
              </div>
            ))
          : bookData.data &&
            bookData.data.map((book, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  padding: "10px",
                  margin: "10px",
                  width: "300px",
                }}
              >
                {/* {book.image && console.log(book.image.split("/")[1])} */}

                <img
                  src={
                    book.image
                      ? `http://127.0.0.1:8000/file/get/${
                          book.image.split("/")[1]
                        }`
                      : myImage
                  }
                  alt={book.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>Price: ${book.price}</p>
                <Link to="add-to-cart">
                  <Button
                    text="Add to Cart"
                    style={{
                      backgroundColor: "green",
                      color: "white",
                    }}
                    onClick={() => handleAddToCart(book)}
                  />
                </Link>
              </div>
            ))}
      </div>
      {/* <CartTotal /> */}
    </div>
  );
};

export default GetAllBooks;
