import React from "react";
import {useMatch} from "react-router";

export const withRoute = (Component) => {

    const ProfileMatchTest = (props) => {
        let match = useMatch("/profile/:userId/");
        return (
            <Component {...props} match={match} />
            );

    }

    return ProfileMatchTest;
}