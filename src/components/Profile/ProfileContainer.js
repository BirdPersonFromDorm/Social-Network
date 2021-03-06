import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRoute} from "../../hoc/withRoutre";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.authUserId;
        if (!userId){
            this.props.history.push("/login")
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render(){
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRoute,
    withAuthRedirect

)(ProfileContainer);
