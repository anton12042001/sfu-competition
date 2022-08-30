import React, {useEffect, useState} from 'react';
import Register from "./Register";
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from "firebase/auth";
import {setUser} from "../../../reduxTollkit/slices/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import cl from './Register.module.css'

const RegisterContainer = () => {
    const [showMessagesEmailVerf, setShowMessagesEmailVerf] = useState(false)
    const [emailVerf, setEmailVerf] = useState(false)

    const dispatch = useDispatch()
    const auth = getAuth();
    const navigate = useNavigate()


    useEffect(() => {
        let currentUser = auth.currentUser
        setEmailVerf(currentUser.emailVerified)
        if(emailVerf === true){
            navigate('/content')
        }
    },[] )


    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                let currentUser = auth.currentUser

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setShowMessagesEmailVerf(true)
                    })

                // navigate('/content')


            })
            .catch(console.error)
    }


    return (
        <div>
            <div className={cl.register} ><Register handleRegister={handleRegister}/></div>
            {showMessagesEmailVerf && <div className={cl.sendVerf}>Письмо для подтверждения email отправлено на указанную вами почту.</div>}
        </div>
    );
};

export default RegisterContainer;