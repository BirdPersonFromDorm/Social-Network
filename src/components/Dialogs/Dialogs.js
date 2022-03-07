import React from "react";
import dialogsCss from './Dialogs.module.css';
import DialogItem from "./DialigItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogReducer";

const Dialogs = (props) =>{
    let dialogsElements = props.state.dialogsData
        .map( dialogElement => <DialogItem name={dialogElement.name} id={dialogElement.id}/>);
    let messageElements = props.state.messageData
        .map( messageElement => <Message message={messageElement.message}/>)
    let newMessageText = props.state.newMessageText;

    let onSendMessageClick = () =>{
        props.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) =>{
        const text = e.target.value;
        props.dispatch(updateNewMessageCreator(text));
    }
    return(
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                <div>
                    {messageElements}
                </div>
                <div className={dialogsCss.formOfPost}>
                    <textarea value={newMessageText}
                              onChange={onNewMessageChange}
                              rows="5" cols="33"/>
                    <button onClick={onSendMessageClick} type="submit">Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;