import React from "react";
import postCss from './Post.module.css';

const Post = (props) =>{
    return (
        <div className={postCss.main_post}>
            <div className={postCss.main_post_img}>
                <img src="https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg" alt=""/>
            </div>
            <div className={postCss.main_post_message}>
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default Post;