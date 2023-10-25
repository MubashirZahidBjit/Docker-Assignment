import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

const useBookHook = () => {
  const [bookData, setBookData] = useState([]);
  //   const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);

    axiosInstance
      .get("/books/api/getAll")
      .then((response) => {
        setBookData(response.data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        // setLoading(false);
      });
  }, []);

  const createBook = (formData) => {
    // setLoading(true);
    console.log("data: ", formData);

    axiosInstance
      .post("/books/api/create", formData)
      .then((response) => {
        console.log("Successfully created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating product:", error);
      });
    // .finally(() => {
    //   // setLoading(false);
    // });
  };

  const deleteBook = (bookId) => {
    // setLoading(true);

    axiosInstance
      .delete(`/books/api/delete/${bookId}`)
      .then((response) => {
        console.log("Successfully deleted:", response.data);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  };

  const updateBook = (bookId, updatedData) => {
    // setLoading(true);

    axiosInstance
      .put(`/books/api/update/${bookId}`, updatedData)
      .then((response) => {
        console.log("Successfully updated:", response.data);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  };

  return {
    bookData,
    createBook,
    updateBook,
    deleteBook,
  };
};
export default useBookHook;
