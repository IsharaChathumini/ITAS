import axios from 'axios';
import { TRAINING_TYPE_LOAD_FAIL, 
    TRAINING_TYPE_LOAD_REQUEST,
     TRAINING_TYPE_LOAD_SUCCESS ,
     CREATE_TRAINING_TYPE_FAIL,
     CREATE_TRAINING_TYPE_REQUEST,
     CREATE_TRAINING_TYPE_SUCCESS,
    
    
    
    } from '../constants/trainingTypeConstant';



export const trainingTypeLoadAction = () => async (dispatch) => {
    dispatch({ type: TRAINING_TYPE_LOAD_REQUEST });
    try {
        const { data } = await axios.get('/api/type/training');
        dispatch({
            type: TRAINING_TYPE_LOAD_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: TRAINING_TYPE_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}


// create trainings category
export const createTrainingTypeAction = (trainingtype) => async (dispatch) => {
    dispatch({ type: CREATE_TRAINING_TYPE_REQUEST})

    try {
        const { data } = await axios.post("/api/type/create", trainingtype)
        dispatch({
            type: CREATE_TRAINING_TYPE_SUCCESS,
            payload: data
        })
        toast.success("Training type created successfully");


    } catch (error) {
        dispatch({
            type: CREATE_TRAINING_TYPE_FAIL,
            payload: error.response.data.error
        })
        toast.error(error.response.data.error);

    }
}