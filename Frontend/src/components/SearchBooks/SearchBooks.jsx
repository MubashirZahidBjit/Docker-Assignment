// import React, { useState } from "react";
// import useBookHook from "../../hooks/useBookHook";
// import GetAllBooks from "../GetAllBooks/GetAllBooks";
// import { debounce } from "lodash";

// const SearchBooks = () => {
//   const { bookData } = useBookHook();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredBooks, setFilteredBooks] = useState([]);

//   // Debounce the search function
//   const delayedSearch = debounce((query) => {
//     const results = bookData.data.filter((book) =>
//       book.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredBooks(results);
//   }, 1000); // Adjust the delay time (in milliseconds) as needed

//   const handleSearch = (event) => {
//     const query = event.target.value;
//     setSearchTerm(query);
//     delayedSearch(query); // Delayed search function
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="Search by book title"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>
//       <GetAllBooks books={filteredBooks} />
//     </div>
//   );
// };

// export default SearchBooks;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button"; // You can use your existing Button component
import CartTotal from "../Cart/CartTotal"; // You can use your existing CartTotal component
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cart"; // You can use your existing Redux cart actions
import myImage from "../../assets/Book_pic.jpg"; // Update with your image source
import axiosInstance from "../../utils/axiosInstance";

// const SearchBooks = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [errorMsg, setErrorMsg] = useState("");

//   // Redux state and actions for the cart
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);

//   const handleAddToCart = (book) => {
//     dispatch(addToCart(book));
//   };

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         // You can make an API request here to search for books based on the searchTerm
//         // Replace the following dummy data with your actual API call
//         const dummySearchResults = [
//           {
//             _id: "1",
//             title: "Book 1",
//             description: "Description 1",
//             price: 20.0,
//           },
//           {
//             _id: "2",
//             title: "Book 2",
//             description: "Description 2",
//             price: 25.0,
//           },
//         ];

//         setSearchResults(dummySearchResults);
//       } catch (error) {
//         setErrorMsg("An error occurred while fetching search results.");
//       }
//     };

//     if (searchTerm) {
//       fetchSearchResults();
//     } else {
//       setSearchResults([]);
//     }
//   }, [searchTerm]);

//   return (
//     <div>
//       <h1>Search for Books</h1>
//       <input
//         placeholder="Search for books"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <h4>Search Results:</h4>
//       <div
//         style={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//         }}
//       >
//         {searchResults.map((book, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "5px",
//               padding: "10px",
//               margin: "10px",
//               width: "300px",
//             }}
//           >
//             <img
//               src={myImage} // Update with the book image source
//               alt={book.title}
//               style={{ maxWidth: "100%", height: "auto" }}
//             />
//             <h3>{book.title}</h3>
//             <p>{book.description}</p>
//             <p>Price: ${book.price}</p>
//             <Link to="add-to-cart">
//               <Button
//                 text="Add to Cart"
//                 style={{ backgroundColor: "green", color: "white" }}
//                 onClick={() => handleAddToCart(book)}
//               />
//             </Link>
//           </div>
//         ))}
//         {errorMsg && <h4>Error: {errorMsg}</h4>}
//       </div>
//       <CartTotal />
//     </div>
//   );
// };

const SearchBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  // Redux state and actions for the cart
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = (book) => {
    dispatch(addToCart(book));
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchTerm) {
          // Make an API request to search for books based on the searchTerm
          const response = await axiosInstance(
            `/books/api/getAll?title=${searchTerm}`
          );
          console.log(response.data.data);
          if (response) {
            let data = await response.json();
            setSearchResults(data.data);
          } else {
            setErrorMsg("An error occurred while fetching search results.");
          }
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        setErrorMsg("An error occurred while fetching search results.");
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div>
      <h1>Search for Books</h1>
      <input
        placeholder="Search for books"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h4>Search Results:</h4>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {searchResults.map((book, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "10px",
              margin: "10px",
              width: "300px",
            }}
          >
            <img
              src={myImage} // Update with the book image source
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
        ))}
        {errorMsg && <h4>Error: {errorMsg}</h4>}
      </div>
    </div>
  );
};

export default SearchBooks;
