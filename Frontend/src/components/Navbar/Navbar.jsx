import React from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import LogOut from "../LogOut/LogOut";
import bookLogo from "../../assets/Book-Shop-logo.webp";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const token = localStorage.getItem("token");
  let isAdmin = false;

  if (token) {
    try {
      isAdmin = decodeToken(token).role === 1;
    } catch (error) {
      // Handle token decoding errors if needed
      console.error("Error decoding token:", error);
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={bookLogo} alt="Logo" />
        </div>
      </div>
      <div className="navbar-middle">
        <input type="text" placeholder="Search..." className="search-input" />
        {/* <Button
          text="Search"
          style={{ backgroundColor: "#007bff", color: "white" }}
        /> */}
      </div>
      <div className="navbar-right">
        <div className="nav-buttons">
          {user?.name ? (
            <LogOut />
          ) : (
            <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
              <Link to="/login">
                <Button
                  text="Log In"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                />
              </Link>
              <Link to="/signup">
                <Button
                  text="Sign Up"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                />
              </Link>
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            {isAdmin && (
              <Link to="/create-book">
                <Button
                  text="Add Books"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                />
              </Link>
            )}

            {isAdmin && (
              <Link to="/update-book">
                <Button
                  text="Edit Books"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                />
              </Link>
            )}

            {isAdmin && (
              <Link to="/delete-book">
                <Button
                  text="Delete Books"
                  style={{ backgroundColor: "#007bff", color: "white" }}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
