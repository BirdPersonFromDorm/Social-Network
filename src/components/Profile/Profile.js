import React from "react";
import profileCss from './Profile.module.css';
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <MainInfo profile={props.profile}
                      status={props.status}
                      updateStatus={props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;