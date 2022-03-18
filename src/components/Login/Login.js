import React from "react";
import LoginForm, {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../redux/authReducer";
import {compose} from "redux";
import {withAfterAuthRedirect} from "../../hoc/withAfterAuthRedirect";

const Login = (props) => {
    const onSubmit = (formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default compose(
    connect(mapStateToProps, {login, logout}),
    withAfterAuthRedirect
)(Login)