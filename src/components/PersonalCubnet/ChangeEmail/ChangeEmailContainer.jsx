import React, {useState} from 'react';
import ChangeEmail from "./ChangeEmail";
import {EmailAuthProvider, getAuth, reauthenticateWithCredential, updateEmail} from "firebase/auth";
import {useDispatch} from "react-redux";
import {editUserProfileMail} from "../../../reduxTollkit/slices/userProfileSlice";
import ChangeEmailPopapForm from "./ChangeEmailPopapForm/ChangeEmailPopapForm";
import cl from './ChangeEmail.module.css'

const ChangeEmailContainer = (props) => {

    const [authPopap, setAuthPopap] = useState(true)
    const dispatch = useDispatch()
    const auth = getAuth();

    const reauthorization = (data) => {
        const credential = EmailAuthProvider.credential( data.email, data.password)
        const user = getAuth().currentUser;
        reauthenticateWithCredential(user, credential).then(() => {
            setAuthPopap(false)
        }).catch((error) => {
            console.log(error)
        });

    }


    const updateMail = (data) => {
        updateEmail(auth.currentUser, `${data.email}`).then(() => {
            alert("Почта успешно обновлена")
            dispatch(editUserProfileMail(data.email))
        }).catch((error) => {
            setAuthPopap(true)

        });
    }


    return (
        <div>
            {authPopap && <div className={cl.reAuthPopap}> <ChangeEmailPopapForm reauthorization={reauthorization} /></div>}
            <ChangeEmail updateMail={updateMail} email={props.email} />
        </div>
    );
};

export default ChangeEmailContainer;