const express = require('express');
const router = express.Router();
const { isAuthenticated,isAdmin } = require('../middleware/auth');
const { createTraining ,singleTraining,updateTraining,showTrainings, deleteTraining} = require('../controllers/trainingController');




//training routes

// /api/training/create
router.post('/training/create',isAuthenticated, isAdmin, createTraining);

// /api/training/id
router.get('/training/:id',singleTraining );

// /api/training/update/training_id
router.put('/training/update/:training_id', isAuthenticated, isAdmin, updateTraining);

// /api/training/delete/training_id
router.delete('/training/delete/:training_id', isAuthenticated, isAdmin, deleteTraining);

// /api/training/show
router.get('/trainings/show', showTrainings);

module.exports = router;