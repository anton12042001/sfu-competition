import React from 'react';
import Login from "./Login";
import {setUser} from "../../../reduxTollkit/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginAPI} from "../../../api/login/loginAPI";
import {sendMessagesAPI} from "../../../api/sendEmailVerification/sendMessagesAPI";

const LoginContainer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {emailVerified,email} = useSelector(state => state.user)

    if(emailVerified && email){
        navigate('/content')
    }

    const handleLogin = (email, password) => {
        loginAPI(email,password)
            .then(({user}) => {
                if(user.emailVerified === false){
                    navigate('/mailVerification')
                    sendMessagesAPI()
                }else navigate('/content')
                console.log(user)
                if(user.emailVerified === true) {
                    dispatch(setUser({email: user.email, id: user.uid, token: user.accessToken, emailVerified: user.emailVerified}))
                }
            })
            .catch(console.error)
    }



    return (
        <div>
            <Login handleLogin={handleLogin}/>
        </div>
    );
};

export default LoginContainer;