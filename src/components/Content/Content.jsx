import React from 'react';
import cl from './Content.module.css'
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/auth-reducer";

const Content = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isAuth, email} = useAuth()
debugger
    return  (
        <div className={cl.content} >
            Контент

            Welcome

                <button onClick={() => dispatch(setUser({email:  null, token: null, id: null}))} >Logout{email}</button>
        </div>
    )
};

export default Content;