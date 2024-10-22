import { Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardElement from '../../component/CardElement';
import { deleteTraining } from '../../actions/userTrainingActions'; // Import the delete action
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const UserTrainingHistory = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.userProfile); // Get user profile from Redux store

    useEffect(() => {
        // Log user training history to debug
        if (user && user.trainingHistory) {
            console.log("User Training History:", user.trainingHistory);
        } else {
            console.log("No training history available for this user.");
        }
    }, [user]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this training?")) {
            dispatch(deleteTraining(id)); // Dispatch delete action
        }
    };

    return (
        <>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h5" sx={{ color: "black", fontWeight: "bold", mb: 2 }}>
                    Trainings History
                </Typography>
                <Box>
                    {
                        user && user.trainingHistory.map((history, i) => (
                            <CardElement
                                key={i}
                                id={history._id}
                                trainingTitle={history.title}
                                description={history.description}
                                category={history.trainingType?.trainingTypeName || "N/A"} // Ensure to access the category name correctly
                                location={history.location}
                                salary={history.salary} // Pass the salary to the CardElement
                                onDelete={handleDelete}  // Pass delete handler to each card
                            />
                        ))
                    }
                </Box>
            </Box>
            <Button
                variant="contained"
                size="medium"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/user/dashboard`}
                >
                    Back
                </Link>
            </Button>
        </>
    );
};

export default UserTrainingHistory;
