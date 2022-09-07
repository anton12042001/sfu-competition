import React, {useState} from 'react';
import ChangeEmail from "./ChangeEmail";
import {getAuth, updateEmail} from "firebase/auth";
import {useDispatch} from "react-redux";
import {editUserProfileMail} from "../../../reduxTollkit/slices/userProfileSlice";
import ChangeEmailPopapForm from "./ChangeEmailPopapForm/ChangeEmailPopapForm";
import cl from './ChangeEmail.module.css'
import {reAuthAPI} from "../../../api/reAuth/reAuthAPI";
import {useNavigate} from "react-router-dom";
import {sendMessagesAPI} from "../../../api/sendEmailVerification/sendMessagesAPI";

const ChangeEmailContainer = (props) => {

    const [authPopap, setAuthPopap] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth();

    const reauthorization = (data) => {
        reAuthAPI(data).then(() => {
            setAuthPopap(false)
        }).catch((error) => {
            console.log(error)
        });

    }


    const updateMail = (data) => {
        updateEmail(auth.currentUser, `${data.email}`).then(() => {
            alert("Почта успешно обновлена")
            dispatch(editUserProfileMail(data.email))
            sendMessagesAPI().then(r => {
                navigate('/mailVerification')
            })
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