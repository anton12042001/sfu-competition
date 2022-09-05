import React from 'react';
import ChangeEmail from "./ChangeEmail";
import { getAuth, updateEmail, reauthenticateWithCredential } from "firebase/auth";
import {useDispatch} from "react-redux";
import {editUserProfileMail} from "../../../reduxTollkit/slices/userProfileSlice";

const ChangeEmailContainer = (props) => {

    const dispatch = useDispatch()

    const updateMail = (data) => {
        debugger
        const auth = getAuth();
        updateEmail(auth.currentUser, `${data.email}`).then(() => {
            alert("Почта успешно обновлена")
            dispatch(editUserProfileMail(data.email))
        }).catch((error) => {
            const credential = promptForCredentials();

            reauthenticateWithCredential(user, credential).then(() => {
                // User re-authenticated.
            }).catch((error) => {
                // An error ocurred
                // ...
            });
        });
    }


    return (
        <div>
            <ChangeEmail updateMail={updateMail} email={props.email} />
        </div>
    );
};

export default ChangeEmailContainer;