import React from "react";
import {Route, Routes} from "react-router";
import Login from "../components/Login/Login";
import {connect} from "react-redux";
import Profile from "../components/Profile/Profile";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAfterAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth) {
                return (
                    <Routes>
                        <Route path="/" element={<Profile/>}/>
                    </Routes>
                );
            }
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}