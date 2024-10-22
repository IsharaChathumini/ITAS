// src/actions/userTrainingActions.js

import axios from 'axios';
import { DELETE_TRAINING_REQUEST, DELETE_TRAINING_SUCCESS, DELETE_TRAINING_FAIL } from '../constants/userTrainingConstants';

// Action to delete a training
export const deleteTraining = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_TRAINING_REQUEST });

        await axios.delete(`/api/user/traininghistory/${id}`);  

        dispatch({
            type: DELETE_TRAINING_SUCCESS,
            payload: id
        });

        
    } catch (error) {
        dispatch({
            type: DELETE_TRAINING_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
};
