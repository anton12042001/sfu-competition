import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from "react-redux";
import FormAuthRegister from "../../../components/Authorization/FormAuthRegister";
import {setUser} from "../../../redux/auth-reducer";

const Register = () => {

    const dispatch = useDispatch()

    const handleRegister = (email, password) => {
        debugger
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user)
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
           <FormAuthRegister handleRegister={handleRegister}/>
        </div>
    );
};

export default Register;