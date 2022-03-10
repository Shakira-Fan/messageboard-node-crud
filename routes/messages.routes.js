const express = require("express");

const {
  findMessages,
  createMessage,
  deleteMessage,
} = require("../controllers/message.controllers");

const router = express.Router();

// Render all tasks
router.get("/", findMessages);

router.post("/add", createMessage);

router.delete("/delete/:id", deleteMessage);

module.exports = router;
