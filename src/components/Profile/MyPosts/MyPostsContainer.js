import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        postData: state.profilePage.postData,
        textPost: state.profilePage.newPostText,
    };
}

let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () =>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) =>{
           dispatch(updateNewPostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;