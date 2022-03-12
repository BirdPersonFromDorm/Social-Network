import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messageData: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        },
        onNewMessageChange: (text) =>{
            dispatch(updateNewMessageCreator(text));
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;