import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTitle = searchParams.get("title");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Simulate fetching search results based on the title query parameter
    // You would replace this with your actual API call or data fetching logic
    const fetchSearchResults = async () => {
      try {
        // Make an API request to search for books by title
        const response = await fetch(`/books/api/getAll?title=${searchTitle}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setSearchResults(data); // Update the search results state
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (searchTitle) {
      fetchSearchResults();
    }
  }, [searchTitle]);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Search Results for "{searchTitle}"
      </h1>
      <ul>
        {searchResults.map((book, index) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>Price: ${book.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
