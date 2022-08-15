import React from 'react';
import cl from './Content.module.css'
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from "../../reduxTollkit/slices/userSlice";

const Content = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isAuth, email} = useAuth()
debugger
    return isAuth ?  (
        <div className={cl.content} >
            Контент

            Welcome

                <button onClick={() => dispatch(removeUser())} >Logout{email}</button>
        </div>
    ) : navigate('/authorization')
};

export default Content;