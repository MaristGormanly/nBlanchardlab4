// server/service/userService.js

const userController = require('../controller/userController');

module.exports = {
  getAllUsers: userController.getUsers,
  saveUser:    userController.saveUser,
  getUser:     userController.getUser
};
