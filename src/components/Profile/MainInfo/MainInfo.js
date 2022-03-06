import profileCss from "../Profile.module.css";
import React from "react";

const MainInfo = () =>{
    return (
        <div className={profileCss.main_info}>
            <div className={profileCss.main_profile_info_img}>
                <img src="https://image.shutterstock.com/image-vector/picture-icon-260nw-323592404.jpg" alt=""/>
            </div>
            <div className={profileCss.main_desc}>
                <p>
                    <ul>
                        <li><span className={profileCss.dark_color}>Name:</span> Roma</li>
                        <li><span className={profileCss.dark_color}>City:</span> Gorlovka</li>
                    </ul>
                </p>
            </div>
        </div>
    );
}

export default MainInfo;