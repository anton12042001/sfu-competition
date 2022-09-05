import React from 'react';
import ChangeFullName from "./ChangeFullName";
import {getAuth} from "firebase/auth";
import {editUserProfileFullName} from "../../../reduxTollkit/slices/userProfileSlice";
import {useDispatch} from "react-redux";
import {editProfileFullNameAPI} from "../../../api/editProfile/editProfileAPI";

const ChangeFullNameContainer = (props) => {

    const dispatch = useDispatch()

    const sendFullName = (data) => {
        editProfileFullNameAPI(data)
            .then(() => {
            dispatch(editUserProfileFullName(getAuth().currentUser.displayName))
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