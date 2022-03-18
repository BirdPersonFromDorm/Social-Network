import React from "react";
import dialogsCss from './Dialogs.module.css';
import DialogItem from "./DialigItem/DialogItem";
import Message from "./Message/Message";
import Login from "../Login/Login";
import {Route, Routes, useNavigate} from "react-router";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogReducer";
import MessageForm from "./MessageForm";
import {reduxForm} from "redux-form";

const Dialogs = (props) =>{
    let dialogsElements = props.dialogsData
        .map( dialogElement => <DialogItem name={dialogElement.name} id={dialogElement.id} key={dialogElement.id}/>);

    let messageElements = props.messageData
        .map( messageElement => <Message message={messageElement.message} key={messageElement.id}/>)

    const addNewMessage = (values) => {
        props.sendMessageCreator(values.newMessageBody);
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
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    );
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(MessageForm)

export default Dialogs;