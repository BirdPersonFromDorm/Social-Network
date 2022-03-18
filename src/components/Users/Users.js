import React from "react";
import userCss from "./Users.module.css";
import userPhoto from "../../assets/main-pgoto.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersApi} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 15) {
            pages.push(i);
        }
    }

    return (
        <div>
            <div className={userCss.users_page}>
                {pages.map(x => {
                    return (
                        <span onClick={() => {props.onPageChanged(x)}}
                              className={props.currentPage === x ? userCss.selectedPage : userCss.users_page}>{x}</span>
                    );
                })}
            </div>
            {
                props.users.map(x => <div key={x.id}>
                    <div className={userCss.user_container}>
                        <div className={userCss.leftUser}>
                            <div className={userCss.photo}>
                                <NavLink to={'/profile/' + x.id}>
                                    <img src={x.photos.small != null ? x.photos.small : userPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div className={userCss.button}>
                                {x.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === x.id)}
                                              onClick={() => {props.unfollow(x.id)}}>
                                        UnFollow
                                    </button>
                                    : <button disabled={props.followingInProgress.some(id => id === x.id)}
                                              onClick={() => {props.follow(x.id)}}>
                                        Follow
                                    </button>
                                }
                            </div>
                        </div>
                        <div className={userCss.rightUser}>
                            <h1>{x.name}</h1>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;