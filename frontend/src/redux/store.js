import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import {
    deleteTrainingReducer,
    loadTrainingReducer,
    loadTrainingSingleReducer,
    registerAtrainingReducer,
    updateTrainingReducer
} from './reducers/trainingReducer';

import {
    createTrainingTypeReducer,
    loadTrainingTypeReducer
} from './reducers/trainingTypeReducer';



// Import your reducers
import {allUserReducer,userApplyTrainingReducer, userReducerSignIn ,  userReducerLogout,userReducerProfile,  userReducerSignUp} from './reducers/userReducer';

//import { modeReducer } from './reducers/themeModeReducer';


// Combine reducers
const reducer = combineReducers({
    loadTraining: loadTrainingReducer,
    trainingTypeAll: loadTrainingTypeReducer,
    signIn: userReducerSignIn,
    logOut: userReducerLogout,
    userProfile: userReducerProfile,
    singleTraining: loadTrainingSingleReducer,
    userTrainingApplication: userApplyTrainingReducer,
    allUsers: allUserReducer,
    signUp: userReducerSignUp,
    //mode: modeReducer,
    registerTraining: registerAtrainingReducer,
    deleteTraining: deleteTrainingReducer,
    createTrainingType: createTrainingTypeReducer,
    updateTraining: updateTrainingReducer
});

//initial state
let initialState = {
  signIn: {
      userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
  },
  mode: {
      mode: "light"
  }
};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store;
