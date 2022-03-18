import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import css from '../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"}
                           name={"email"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"}
                           name={"password"}
                           type={"password"}
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field type="checkbox"
                           name={"rememberMe"}
                           component={Input}/>
                    remember me
                </div>
                {
                    props.error && <div className={css.formSummaryError}>
                        <p>{props.error}</p>
                    </div>
                }
                <div>
                    <button>Enter</button>
                </div>
            </form>
        </div>
    );
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginForm;