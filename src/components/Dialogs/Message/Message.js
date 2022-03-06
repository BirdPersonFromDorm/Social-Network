import dialogsCss from "../Dialogs.module.css";
import React from "react";

const Message = (props) =>{
    return (
        <div className={dialogsCss.message}>
            {props.message}
        </div>
    );
}

export default Message;