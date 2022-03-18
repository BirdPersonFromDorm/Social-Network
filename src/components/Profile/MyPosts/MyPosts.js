import React from "react";
import myPostsCss from './MyPosts.module.css'
import Post from "./Post/Post";
import MyPostsForm from "./MyPostsForm";
import {reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postElements = props.postData
        .map(postElement => <Post message={postElement.message}  key={postElement.id}/>)

    const onSubmit = (values) =>{
        props.addPost(values.newPostText)
    }
    return (
        <div>
            <div className={myPostsCss.formOfPost}>
               <AddNewPostForm onSubmit={onSubmit}/>
            </div>
            <div className={myPostsCss.main_posts}>
                {postElements}
            </div>
        </div>
    );

}
const AddNewPostForm = reduxForm({
    form: "ProfileAddNewPostForm"
})(MyPostsForm)

export default MyPosts;