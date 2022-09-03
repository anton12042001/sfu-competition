import React from 'react';
import cl from "./HeaderPersonalCubnet.module.css";
import {useNavigate} from "react-router-dom";

const HeaderPersonalCubnet = () => {

    const navigate = useNavigate()

    const showPersonalCubnet = () => {
        navigate('/personalCubnet')
    }
    return (
        <div className={cl.personalCubnet} >
            <button onClick={showPersonalCubnet} >Личный кабинет</button>
        </div>
    );
};

export default HeaderPersonalCubnet;