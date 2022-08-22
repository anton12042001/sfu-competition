import React from 'react';
import cl from './Header.module.css'
import HeaderCurrentUser from "./HeaderCurrentUser/HeaderCurrentUser";
import {useAuth} from "../../hooks/useAuth";

const Header = (props) => {

    return (
        <div className={cl.header} >
            Шапка
            <HeaderCurrentUser/>
        </div>
    );
};

export default Header;