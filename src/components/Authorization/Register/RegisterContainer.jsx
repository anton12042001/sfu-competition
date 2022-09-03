import React, {useState} from 'react';
import Register from "./Register";
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification} from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import cl from './Register.module.css'

const RegisterContainer = () => {
    const [showMessagesEmailVerf, setShowMessagesEmailVerf] = useState(false)
    const {email} = useSelector(state => state.user)
    const auth = getAuth();
    const navigate = useNavigate()


    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setShowMessagesEmailVerf(true)
                    })

                navigate('/mailVerification')
                (email) && navigate('/content')



            })
            .catch(console.error)
    }


    return (
        <div>
            <div className={cl.register}><Register email={email} handleRegister={handleRegister}/></div>
            {showMessagesEmailVerf &&
                <div className={cl.sendVerf}>Письмо для подтверждения email отправлено на указанную вами почту.</div>}
        </div>
    );
};

export default RegisterContainer;