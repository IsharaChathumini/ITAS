import axios from 'axios';
import { TRAINING_LOAD_FAIL,
     TRAINING_LOAD_REQUEST,  
     TRAINING_LOAD_SINGLE_FAIL,
       TRAINING_LOAD_SINGLE_REQUEST,  
       TRAINING_LOAD_SINGLE_SUCCESS,  
       TRAINING_LOAD_SUCCESS,
       REGISTER_TRAINING_FAIL,
       REGISTER_TRAINING_REQUEST,
       REGISTER_TRAINING_SUCCESS,
       DELETE_TRAINING_FAIL,
    DELETE_TRAINING_REQUEST,
    DELETE_TRAINING_SUCCESS,
    EDIT_TRAINING_FAIL,
    EDIT_TRAINING_REQUEST,
    EDIT_TRAINING_SUCCESS,
    
    
    
    } from "../constants/trainingconstant"


export const trainingLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: TRAINING_LOAD_REQUEST });
    try {
        const { data } = await axios.get(`/api/trainings/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        dispatch({
            type: TRAINING_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TRAINING_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

// single training action
export const trainingLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: TRAINING_LOAD_SINGLE_REQUEST});
    try {
        const { data } = await axios.get(`/api/training/${id}`);
        dispatch({
            type: TRAINING_LOAD_SINGLE_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TRAINING_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}

//delete single training action
export const deleteSingleTrainingAction = (training_id) => async (dispatch) => {
    dispatch({ type: DELETE_TRAINING_REQUEST });
    try {
        const { data } = await axios.delete(`/api/training/delete/${training_id}`);
        dispatch({
            type: DELETE_TRAINING_SUCCESS,
            payload: data
        });
        toast.success("Training deleted successfully");
    } catch (error) {
        dispatch({
            type: DELETE_TRAINING_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

//edit single training action
export const editSingleTrainingAction = (training) => async (dispatch) => {
    dispatch({ type: EDIT_TRAINING_REQUEST });
    try {
        const { data } = await axios.put(`/api/training/update/${training._id}`, training);
        dispatch({
            type: EDIT_TRAINING_SUCCESS,
            payload: data
        });
        toast.success("Training updated successfully");
    } catch (error) {
        dispatch({
            type: EDIT_TRAINING_FAIL,
            payload: error.response.data.error
        });
        toast.error(error.response.data.error);
    }
}

// register training action
export const registerAtrainingAction = (training) => async (dispatch) => {
    dispatch({ type: REGISTER_TRAINING_REQUEST})

    try {
        const { data } = await axios.post("/api/training/create",training)
        dispatch({
            type: REGISTER_TRAINING_SUCCESS,
            payload: data
        })
        //toast.success("Training created successfully");

    } catch (error) {
        const errorMessage = error.response?.data?.error || 'An unexpected error occurred';
        dispatch({
            type: REGISTER_TRAINING_FAIL,
            payload: errorMessage
        });
        //toast.error(errorMessage);
    }
    
}
