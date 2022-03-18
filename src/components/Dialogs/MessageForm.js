import React from "react";
import {Field} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const MessageForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea}
                       validate={[required,maxLengthCreator]}
                       name="newMessageBody"
                       placeholder="Enter message"
                       rows="5" cols="33"/>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default MessageForm;