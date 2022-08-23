import React from 'react';
import Register from "./Register";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import {setUser} from "../../../reduxTollkit/slices/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const RegisterContainer = () => {

    const dispatch = useDispatch()
    const auth = getAuth();
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
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
            <Register handleRegister={handleRegister}/>
        </div>
    );
};

export default RegisterContainer;