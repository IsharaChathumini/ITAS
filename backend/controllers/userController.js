const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

// Load all users with pagination
exports.allUsers = async (req, res, next) => {
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;

    try {
        const count = await User.estimatedDocumentCount();
        const users = await User.find().sort({ createdAt: -1 }).select('-password')
            .skip(pageSize * (page - 1))
            .limit(pageSize);

        res.status(200).json({
            success: true,
            users,
            page,
            pages: Math.ceil(count / pageSize),
            count
        });
    } catch (error) {
        next(new ErrorResponse("Failed to load users", 500));
    }
};

// Show single user
exports.singleUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return next(new ErrorResponse("User not found", 404));
        }
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(new ErrorResponse("Failed to load user", 500));
    }
};

// Edit user
exports.editUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            return next(new ErrorResponse("User not found", 404));
        }
        res.status(200).json({
            success: true,
            user
        });
    } catch (error) {
        next(new ErrorResponse("Failed to update user", 500));
    }
};

// Delete user
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndRemove(req.params.id);
        if (!user) {
            return next(new ErrorResponse("User not found", 404));
        }
        res.status(200).json({
            success: true,
            message: "User deleted"
        });
    } catch (error) {
        next(new ErrorResponse("Failed to delete user", 500));
    }
};

// Add training to user's training history
exports.createUserTrainingHistory = async (req, res, next) => {
    const { title, description, salary, location} = req.body;

    try {
        const currentUser = await User.findById(req.user._id);
        if (!currentUser) {
            return next(new ErrorResponse("You must log in", 401));
        }

        const addTrainingHistory = {
            title,
            description,
            salary,
            location,
            user: req.user._id,
            
        };

        currentUser.trainingHistory.push(addTrainingHistory);
        await currentUser.save();

        res.status(200).json({
            success: true,
            currentUser
        });
    } catch (error) {
        next(new ErrorResponse("Failed to add training history", 500));
    }
};

// Delete specific training from user's training history
exports.deleteUserTrainingHistory = async (req, res, next) => {
    try {
        const currentUser = await User.findById(req.user._id);
        if (!currentUser) {
            return next(new ErrorResponse("User not found", 404));
        }

        // Find the index of the training in the training history array
        const trainingIndex = currentUser.trainingHistory.findIndex(training => training._id.toString() === req.params.trainingId);

        if (trainingIndex === -1) {
            return next(new ErrorResponse("Training not found", 404));
        }

        // Remove the training from the array
        currentUser.trainingHistory.splice(trainingIndex, 1);
        await currentUser.save();

        res.status(200).json({
            success: true,
            message: "Training removed from history",
            user: currentUser
        });
    } catch (error) {
        next(new ErrorResponse("Failed to delete training from history", 500));
    }
};
