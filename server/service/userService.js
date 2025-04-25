// server/service/userService.js
const express = require('express');
const app = express();

app.use(express.json()); // ✅ THIS is the fix
const userController = require('../controller/userController');

module.exports = {
  getAllUsers: userController.getUsers,
  saveUser:    userController.saveUser,
  getUser:     userController.getUser
};
