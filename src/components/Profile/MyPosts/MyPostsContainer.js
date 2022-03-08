import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let changeText = (text) =>{
        props.store.dispatch(updateNewPostActionCreator(text));
    }
    return (
        <MyPosts updateNewPostText={changeText}
                 addPost={addPost}
                 postData={state.profilePage.postData}
                 textPost={state.profilePage.newPostText}
                 />
    );
}

export default MyPostsContainer;