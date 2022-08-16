import React from 'react';
import {useAuth} from "../../../hooks/useAuth";
import {removeUser} from "../../../reduxTollkit/slices/userSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const HeaderCurrentUser = () => {
    const {isAuth, email} = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    return isAuth ? (
        <div>
            <button onClick={() => dispatch(removeUser())} >Logout {email}</button>

        </div>
    ) : (
        <button onClick={() => navigate('/authorization')}>Войти</button>
    )
};

export default HeaderCurrentUser;