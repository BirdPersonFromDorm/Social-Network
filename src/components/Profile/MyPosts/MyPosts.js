import React from "react";
import myPostsCss from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.postData
        .map(postElement => <Post message={postElement.message}/>)

    const newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let changeText = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div>
            <div className={myPostsCss.formOfPost}>
               <textarea onChange={changeText} ref={newPostElement} value={props.textPost} rows="5" cols="33"/>
                <button type="submit" onClick={addPost}>Send Message</button>
            </div>
            <div className={myPostsCss.main_posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;