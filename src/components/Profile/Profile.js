import React from "react";
import profileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import MainInfo from "./MainInfo/MainInfo";

const Profile = (props) => {
    return (
        <div>
            <div className={profileCss.main_profile}>
                <img src="https://www.appears-itn.eu/wp-content/uploads/2018/07/long.jpg" alt=""/>
            </div>
            <MainInfo/>
            <MyPosts postData={props.state.postData}/>
        </div>
    );
}

export default Profile;