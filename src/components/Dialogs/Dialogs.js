import React from "react";
import dialogsCss from './Dialogs.module.css';
import DialogItem from "./DialigItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) =>{

    let dialogsElements = props.state.dialogsData
        .map( dialogElement => <DialogItem name={dialogElement.name} id={dialogElement.id}/>);
    let messageElements = props.state.messageData
        .map( messageElement => <Message message={messageElement.message}/>)

    return(
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;