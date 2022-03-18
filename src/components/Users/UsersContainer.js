import React from "react";
import {connect} from "react-redux";
import {
    follow,
    requestUsers,
    setCurrentPage,
    toggleFollowingInProgress, unfollow,
} from "../../redux/userReducer";
import Users from "./Users";
import PreLoader from "../common/PreLoader/PreLoader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getUsers,
    getCurrentPage,
    getFetching,
    getFollowProgress,
    getPageSize,
    getTotalUsersCount
} from "../../redux/usersSelectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <PreLoader/>
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         unfollow={this.props.unfollow}
                         follow={this.props.follow}
                         followingInProgress={this.props.followingInProgress}/>
            }
        </>

    }

}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getFetching(state),
        followingInProgress: getFollowProgress(state)
    }
}


export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, toggleFollowingInProgress, getUsers: requestUsers}),
    withAuthRedirect
)(UsersContainer);