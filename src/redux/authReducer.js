import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) =>{
    switch (action.type ) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId,email,login, isAuth) => ({
    type: SET_USER_DATA,
    payload:  {userId,login,email, isAuth}
});

export const getAuth = () => {
    return (dispatch) => {
        return authApi.me().then(data => {
            if (data.resultCode === 0){
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
    }
}
export const login = (email, password, rememberMe) => {
    return (dispatch) => {
         authApi.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0){
                dispatch(getAuth())
            } else{
                let message = data.messages.length > 0 ? data.messages[0] : "error"
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
    }
}
export const logout = () => {
    return (dispatch) => {
        authApi.logout().then(data => {
            if (data.resultCode === 0){
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

export default authReducer;