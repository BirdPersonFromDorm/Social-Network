import React from "react";
import {sendMessageCreator} from "../../redux/dialogReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogPage.dialogsData,
        messageData: state.dialogPage.messageData,
        newMessageText: state.dialogPage.newMessageText,
    };
}

export default compose(
    connect(mapStateToProps,{sendMessageCreator}),
    withAuthRedirect
)(Dialogs);;