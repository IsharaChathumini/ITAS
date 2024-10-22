
import { TRAINING_TYPE_LOAD_FAIL,
     TRAINING_TYPE_LOAD_REQUEST, 
     TRAINING_TYPE_LOAD_RESET,
      TRAINING_TYPE_LOAD_SUCCESS,
      CREATE_TRAINING_TYPE_FAIL,
      CREATE_TRAINING_TYPE_REQUEST,
      CREATE_TRAINING_TYPE_RESET,
      CREATE_TRAINING_TYPE_SUCCESS, 
    
    
    
    } from "../constants/trainingTypeConstant"


export const loadTrainingTypeReducer = (state = { trainingType: [] }, action) => {
    switch (action.type) {
        case TRAINING_TYPE_LOAD_REQUEST:
            return { loading: true }
        case TRAINING_TYPE_LOAD_SUCCESS:
            return {
                loading: false,
                trainingType: action.payload.trainingT
            }
        case TRAINING_TYPE_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case TRAINING_TYPE_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

// create training type reducer
export const createTrainingTypeReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_TRAINING_TYPE_REQUEST:
            return { loading: true }
        case CREATE_TRAINING_TYPE_SUCCESS:
            return {
                loading: false,
                trainingType: action.payload,
            }
        case CREATE_TRAINING_TYPE_FAIL:
            return { loading: false, error: action.payload }
        case CREATE_TRAINING_TYPE_RESET:
            return {}
        default:
            return state;
    }

}
