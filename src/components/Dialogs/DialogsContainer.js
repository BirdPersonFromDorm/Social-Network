import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) =>{

    let state = props.store.getState();

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (text) =>{
        props.store.dispatch(updateNewMessageCreator(text));
    }

    return(
        <Dialogs onSendMessageClick={onSendMessageClick}
                 onNewMessageChange={onNewMessageChange}
                 dialogsData={state.dialogPage.dialogsData}
                 messageData={state.dialogPage.messageData}
                 newMessageText={state.dialogPage.newMessageText}/>
    );
}

export default DialogsContainer;