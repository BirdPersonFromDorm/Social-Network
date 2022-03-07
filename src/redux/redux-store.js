import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";

let reduces = combineReducers({
    dialogPage: dialogReducer,
    profilePage: profileReducer
});

let store = createStore(reduces);

export default store;