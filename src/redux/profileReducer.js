import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'My name is Roma'}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) =>{
    switch (action.type ) {
        case ADD_POST:{
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData,{id: 4, message: action.newPostText}]
            }
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status))
                }
            });
    }
}
export default profileReducer;