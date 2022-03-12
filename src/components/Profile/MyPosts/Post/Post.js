import React from "react";
import postCss from './Post.module.css';
import defPhoto from '../../../../assets/main-pgoto.jpg'

const Post = (props) =>{
    return (
        <div className={postCss.main_post}>
            <div className={postCss.main_post_img}>
                <img src={defPhoto} alt=""/>
            </div>
            <div className={postCss.main_post_message}>
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default Post;