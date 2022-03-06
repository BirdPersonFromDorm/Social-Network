import dialogsCss from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const setActive = ({isActive}) => isActive ? dialogsCss.active_link : dialogsCss.item;

const DialogItem = (props) =>{
    let path = "/dialogs/" + props.id;
    return (
        <div className={dialogsCss.item}>
            <NavLink to={path} className={setActive}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;