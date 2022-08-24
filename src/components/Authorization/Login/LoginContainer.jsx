import React from 'react';
import Login from "./Login";
import {setUser} from "../../../reduxTollkit/slices/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginAPI} from "../../../api/login/loginAPI";

const LoginContainer = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = (email, password) => {
        loginAPI(email,password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({email: user.email, id: user.uid, token: user.accessToken,}))
                navigate('/content')
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