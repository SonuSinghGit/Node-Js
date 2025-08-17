const express = require("express");
const router = express.Router();

// import route createTodo route handler
const { createTodo } = require("../controller/createTodo");

// define API routes
router.post("/createTodo", createTodo); // also fixed typo from "createTode"

module.exports = router; // ✅ fixed export
