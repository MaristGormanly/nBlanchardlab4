const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();

// all users routes (GET all users, POST new user)
router.route('/')
  .get((req, res) => {
    userController.getUsers(req, res);
  })
  .post((req, res) => {
    userController.saveUser(req, res);
  });

// user by index route (GET one user)
router.route('/:index')
  .get((req, res) => {
    userController.getUser(req, res);
  });

console.log("[userRoute] initialized");
module.exports = router;
