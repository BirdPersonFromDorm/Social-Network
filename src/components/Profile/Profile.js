import React from "react";
import profileCss from './Profile.module.css';
import MainInfo from "./MainInfo/MainInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div className={profileCss.main_profile}>
                <img src="https://www.appears-itn.eu/wp-content/uploads/2018/07/long.jpg" alt=""/>
            </div>
            <MainInfo profile={props.profile}/>
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;