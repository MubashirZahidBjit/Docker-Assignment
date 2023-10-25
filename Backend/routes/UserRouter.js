const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");
const { isAdmin } = require("../middleware/authValidation");

// Create a new user
router.post("/api/create", UserController.createUser);

// Get all users
router.get("/api/getAllUsers", UserController.getAllUsers); //isAdmin

// Update user
router.put("/api/updateUser/:id", UserController.updateUser);

// Delete a User
router.delete("/api/deleteUser/:id", UserController.deleteUser); //isAdmin

module.exports = router;
