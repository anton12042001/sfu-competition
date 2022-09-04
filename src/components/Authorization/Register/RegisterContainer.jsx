import React from 'react';
import Register from "./Register";
import {createUserWithEmailAndPassword, getAuth,updateProfile} from "firebase/auth";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import cl from './Register.module.css'
import {sendMessagesAPI} from "../../../api/sendEmailVerification/sendMessagesAPI";

const RegisterContainer = () => {
    const {email} = useSelector(state => state.user)
    const auth = getAuth();
    const navigate = useNavigate()


    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword (auth, email, password)
            .then(({user}) => {

//todo сделать нормальное имя
                updateProfile(auth.currentUser, {
                    displayName: "Безымянный абитуриент", photoURL: null
                }).then(() => {

                }).catch((error) => {

                });

                sendMessagesAPI()
                navigate('/mailVerification')
                (email) && navigate('/content')


            })
            .catch(console.error)
    }


    return (
        <div>
            <div className={cl.register}><Register email={email} handleRegister={handleRegister}/></div>
        </div>
    );
};

export default RegisterContainer;