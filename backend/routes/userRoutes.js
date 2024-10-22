const express = require('express');
const router = express.Router();
const { 
    allUsers, 
    singleUser, 
    editUser, 
    deleteUser, 
    createUserTrainingHistory, 
    deleteUserTrainingHistory 
} = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// User Routes

// /api/allusers - Get all users (admin only)
router.get('/allusers', isAuthenticated, isAdmin, allUsers);

// /api/user/:id - Get a single user by ID
router.get('/user/:id', isAuthenticated, singleUser);

// /api/user/edit/:id - Edit a user by ID
router.put('/user/edit/:id', isAuthenticated, editUser);

// /api/admin/user/delete/:id - Delete a user (admin only)
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);

// /api/user/traininghistory - Add training to user history
router.post('/user/traininghistory', isAuthenticated, createUserTrainingHistory);

// /api/user/traininghistory/:trainingId - Delete training from user history
router.delete('/user/traininghistory/:trainingId', isAuthenticated, deleteUserTrainingHistory); // Route for deleting training history

module.exports = router;
