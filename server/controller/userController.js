let users = [];
let nextId = 1;

/**
 * Get all users
 */
const getAllUsers = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Users retrieved successfully',
    data: users
  });
};

/**
 * Get a user by ID
 */
const getUserById = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  if (isNaN(userId)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid user ID'
    });
  }
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found'
    });
  }
  res.status(200).json({
    status: 'success',
    message: 'User retrieved successfully',
    data: user
  });
};

/**
 * Create a new user
 */
const createUser = (req, res) => {
  const { firstName, lastName, password } = req.body;
  if (!firstName || !lastName || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing required fields: firstName, lastName, password'
    });
  }
  const newUser = {
    id: nextId++,
    firstName,
    lastName,
    password
  };
  users.push(newUser);
  res.status(201).json({
    status: 'success',
    message: 'User created successfully',
    data: newUser
  });
};

/**
 * Fully update a user by ID (PUT)
 */
const updateUser = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  if (isNaN(userId)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid user ID'
    });
  }
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found'
    });
  }
  const { firstName, lastName, password } = req.body;
  if (!firstName || !lastName || !password) {
    return res.status(400).json({
      status: 'error',
      message: 'Missing fields for full update: firstName, lastName, password are required'
    });
  }
  // Update all fields
  user.firstName = firstName;
  user.lastName = lastName;
  user.password = password;
  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    data: user
  });
};

/**
 * Partially update a user by ID (PATCH)
 */
const partialUpdateUser = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  if (isNaN(userId)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid user ID'
    });
  }
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found'
    });
  }
  const { firstName, lastName, password } = req.body;
  if (!firstName && !lastName && !password) {
    return res.status(400).json({
      status: 'error',
      message: 'At least one field (firstName, lastName, or password) must be provided for update'
    });
  }
  // Update only provided fields
  if (firstName) user.firstName = firstName;
  if (lastName)  user.lastName = lastName;
  if (password)  user.password = password;
  res.status(200).json({
    status: 'success',
    message: 'User updated successfully',
    data: user
  });
};

/**
 * Delete a user by ID
 */
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.userId, 10);
  if (isNaN(userId)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid user ID'
    });
  }
  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'User not found'
    });
  }
  const deletedUser = users.splice(userIndex, 1)[0];
  res.status(200).json({
    status: 'success',
    message: 'User deleted successfully',
    data: deletedUser
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  partialUpdateUser,
  deleteUser
};
