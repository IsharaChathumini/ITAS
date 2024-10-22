import {
    USER_LOAD_REQUEST,
    USER_LOAD_SUCCESS,
    USER_LOAD_FAIL,
    USER_LOAD_RESET,

    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_RESET,

    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNUP_RESET,

    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAIL,
    USER_LOGOUT_RESET,

    USER_APPLY_TRAINING_REQUEST,
    USER_APPLY_TRAINING_SUCCESS,
    USER_APPLY_TRAINING_FAIL,
    USER_APPLY_TRAINING_RESET,

    ALL_USER_LOAD_REQUEST,
    ALL_USER_LOAD_SUCCESS,
    ALL_USER_LOAD_FAIL,
    ALL_USER_LOAD_RESET,
} from "../constants/userConstant";

import {
    DELETE_TRAINING_REQUEST,
    DELETE_TRAINING_SUCCESS,
    DELETE_TRAINING_FAIL,
} from "../constants/userTrainingConstants";

// User Sign In Reducer
export const userReducerSignIn = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return { loading: true, userInfo: null, isAuthenticated: false };
        case USER_SIGNIN_SUCCESS:
            return { loading: false, userInfo: action.payload, isAuthenticated: true };
        case USER_SIGNIN_FAIL:
            return { loading: false, userInfo: null, isAuthenticated: false, error: action.payload };
        case USER_SIGNIN_RESET:
            return {};
        default:
            return state;
    }
};

// User Sign Up Reducer
export const userReducerSignUp = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return { loading: true };
        case USER_SIGNUP_SUCCESS:
            return { loading: false, userSignUp: action.payload };
        case USER_SIGNUP_FAIL:
            return { loading: false, error: action.payload };
        case USER_SIGNUP_RESET:
            return {};
        default:
            return state;
    }
};

// User Logout Reducer
export const userReducerLogout = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGOUT_REQUEST:
            return { loading: true };
        case USER_LOGOUT_SUCCESS:
            return { loading: false, user: action.payload };
        case USER_LOGOUT_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT_RESET:
            return {};
        default:
            return state;
    }
};

// User Profile Reducer (Loads User Data)
export const userReducerProfile = (state = { user: null }, action) => {
    switch (action.type) {
        case USER_LOAD_REQUEST:
            return { loading: true, user: null };
        case USER_LOAD_SUCCESS:
            return { loading: false, user: action.payload.user };
        case USER_LOAD_FAIL:
            return { loading: false, user: null, error: action.payload };
        case USER_LOAD_RESET:
            return {};

        // Handling delete training
        case DELETE_TRAINING_REQUEST:
            return { ...state, loading: true };
        case DELETE_TRAINING_SUCCESS:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    trainingHistory: state.user.trainingHistory.filter(
                        (training) => training._id !== action.payload
                    ),
                },
            };
        case DELETE_TRAINING_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// Apply for a Training Reducer
export const userApplyTrainingReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_APPLY_TRAINING_REQUEST:
            return { loading: true };
        case USER_APPLY_TRAINING_SUCCESS:
            return { loading: false, userTraining: action.payload };
        case USER_APPLY_TRAINING_FAIL:
            return { loading: false, error: action.payload };
        case USER_APPLY_TRAINING_RESET:
            return {};
        default:
            return state;
    }
};

// All Users Reducer
export const allUserReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USER_LOAD_REQUEST:
            return { loading: true, users: [] };
        case ALL_USER_LOAD_SUCCESS:
            return { loading: false, users: action.payload.users };
        case ALL_USER_LOAD_FAIL:
            return { loading: false, users: [], error: action.payload };
        case ALL_USER_LOAD_RESET:
            return {};
        default:
            return state;
    }
};
