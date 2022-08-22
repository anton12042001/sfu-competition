import React from 'react';
import FormAuthLogin from "../FormAuthLogin";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setUser} from "../../../reduxTollkit/slices/userSlice";


const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/content')
            })
            .catch(console.error)
    }

    return (
        <div>
            Войти в систему
            <FormAuthLogin handleLogin={handleLogin}/>
        </div>
    );
};

export default Login;