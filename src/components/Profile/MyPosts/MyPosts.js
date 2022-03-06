import React from "react";
import myPostsCss from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.postData
        .map(postElement => <Post message={postElement.message}/>)

    return (
        <div>
            <div className={myPostsCss.formOfPost}>
               <textarea id="story" name="story" rows="5" cols="33">
                        It was a dark and stormy night...
               </textarea>
                <button type="submit">Send Message</button>
            </div>
            <div className={myPostsCss.main_posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;