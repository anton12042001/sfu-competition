import React from 'react';
import ChangeFullName from "./ChangeFullName";
import {getAuth, updateProfile} from "firebase/auth";
import {editUserProfile} from "../../../reduxTollkit/slices/userProfileSlice";
import {useDispatch} from "react-redux";

const ChangeFullNameContainer = (props) => {

    const dispatch = useDispatch()

    const sendFullName = (data) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: `${data.displayName}`
        }).then(() => {
            debugger
            dispatch(editUserProfile(auth.currentUser.displayName))
        }).catch((error) => {

        });

    }


    return (
        <div>
            <ChangeFullName sendFullName={sendFullName} displayName={props.displayName} />
        </div>
    );
};

export default ChangeFullNameContainer;