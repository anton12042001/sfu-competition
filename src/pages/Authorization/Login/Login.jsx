import React from 'react';
import FormAuthLogin from "../../../components/Authorization/FormAuthLogin";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUser} from "../../../redux/auth-reducer";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        debugger
        const auth = getAuth();
        debugger
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                debugger
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
            })
            .catch(console.error)
    }

    return (
        <div>
            <FormAuthLogin handleLogin={handleLogin}/>
        </div>
    );
};

export default Login;