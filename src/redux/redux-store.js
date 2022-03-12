import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reduces = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer,
    usersPage: userReducer,
    auth: authReducer
});

let store = createStore(reduces, applyMiddleware(thunkMiddleware));

export default store;