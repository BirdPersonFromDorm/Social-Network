import React from "react";
import {Field} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(30);

const MyPostsForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={Textarea}
                       name="newPostText"
                       placeholder="Enter message"
                       rows="5" cols="33" validate={[required, maxLength]}/>
                <button>Send Message</button>
            </form>
        </div>
    );
}

export default MyPostsForm;