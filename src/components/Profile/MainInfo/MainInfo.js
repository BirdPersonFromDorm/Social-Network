import profileCss from "../Profile.module.css";
import React from "react";
import PreLoader from "../../common/PreLoader/PreLoader";
import defaultPhoto from '../../../assets/main-pgoto.jpg';
import MainStatus from "./MainStatus";

const MainInfo = (props) =>{

    if (!props.profile){
        return (
            <PreLoader/>
        );
    }

    return (
        <div className={profileCss.main_info}>
            <div className={profileCss.main_profile_info_img}>
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultPhoto} alt=""/>
            </div>
            <div className={profileCss.main_desc}>
                <p>
                    <ul>
                        <li><span className={profileCss.dark_color}>Name:</span> {props.profile.fullName}</li>
                        <li><span className={profileCss.dark_color}>Github:</span> {props.profile.contacts.github}</li>
                    </ul>
                </p>
                <MainStatus status={props.status}
                            updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
}

export default MainInfo;