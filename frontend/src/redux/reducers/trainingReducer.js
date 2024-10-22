import { TRAINING_LOAD_FAIL, 
    TRAINING_LOAD_REQUEST,
     TRAINING_LOAD_RESET, 
      TRAINING_LOAD_SUCCESS, 
        TRAINING_LOAD_SINGLE_FAIL,
    TRAINING_LOAD_SINGLE_REQUEST,
    TRAINING_LOAD_SINGLE_RESET,
    TRAINING_LOAD_SINGLE_SUCCESS,
    DELETE_TRAINING_FAIL,
    DELETE_TRAINING_REQUEST,
    DELETE_TRAINING_RESET,
    DELETE_TRAINING_SUCCESS,
    EDIT_TRAINING_FAIL,
    EDIT_TRAINING_REQUEST,
    EDIT_TRAINING_RESET,
    EDIT_TRAINING_SUCCESS, 
    REGISTER_TRAINING_FAIL,
    REGISTER_TRAINING_REQUEST,
    REGISTER_TRAINING_RESET,
    REGISTER_TRAINING_SUCCESS

} from "../constants/trainingconstant"


export const loadTrainingReducer = (state = { trainings: [] }, action) => {
    switch (action.type) {
        case TRAINING_LOAD_REQUEST:
            return { loading: true }
        case TRAINING_LOAD_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocation: action.payload.setUniqueLocation,
                trainings: action.payload.trainings
            }
        case TRAINING_LOAD_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case TRAINING_LOAD_RESET:
            return {}
        default:
            return state;
    }
}

// single TRAINING reducer
export const loadTrainingSingleReducer = (state = { training: {} }, action) => {
    switch (action.type) {
        case TRAINING_LOAD_SINGLE_REQUEST:
            return { loading: true }
        case TRAINING_LOAD_SINGLE_SUCCESS:
            return {

                loading: false,
                success: action.payload.success,
                singleTraining: action.payload.training,

            }
        case TRAINING_LOAD_SINGLE_FAIL:
            return { loading: false, error: action.payload }
        case TRAINING_LOAD_SINGLE_RESET:
            return {}
        default:
            return state;
    }

}

//Registred training;
export const registerAtrainingReducer = (state = {}, action) => {
    switch (action.type) {
        case REGISTER_TRAINING_REQUEST:
            return { loading: true }
        case REGISTER_TRAINING_SUCCESS:
            return {
                loading: false,
                training: action.payload,
            }
        case REGISTER_TRAINING_FAIL:
            return { loading: false, error: action.payload }
        case REGISTER_TRAINING_RESET:
            return {}
        default:
            return state;
    }
}

// delete training by id
//delete product by id
export const deleteTrainingReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_TRAINING_REQUEST:
            return { loading: true }
        case DELETE_TRAINING_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            }
        case DELETE_TRAINING_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case DELETE_TRAINING_RESET:
            return {}
        default:
            return state;
    }
}


export const updateTrainingReducer = (state = {}, action) => {
    switch (action.type) {
        case EDIT_TRAINING_REQUEST:
            return { loading: true }
        case EDIT_TRAINING_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                training: action.payload.training
            }
        case EDIT_TRAINING_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case EDIT_TRAINING_RESET:
            return {}
        default:
            return state;
    }
}