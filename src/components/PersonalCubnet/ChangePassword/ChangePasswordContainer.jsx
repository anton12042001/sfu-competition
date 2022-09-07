import React, {useState} from 'react';
import ChangePassword from "./ChangePassword";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAuth,sendPasswordResetEmail} from "firebase/auth";
import {reAuthAPI} from "../../../api/reAuth/reAuthAPI";
import cl from "../ChangeEmail/ChangeEmail.module.css";
import ChangePopapForm from "../ChangePopapForm/ChangePopapForm";

const ChangePasswordContainer = () => {

    const {email} = useSelector(state => state.user)
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

    const updatePassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Письмо со сбросом пароля отправлено на вашу почту")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (
        <div>
            {authPopap && <div className={cl.reAuthPopap}> <ChangePopapForm reauthorization={reauthorization} /></div>}
            <ChangePassword updatePassword={updatePassword} />
        </div>
    );
};

export default ChangePasswordContainer;