import React from 'react';
import cl from './Header.module.css'
import HeaderCurrentUser from "./HeaderCurrentUser/HeaderCurrentUser";
import HeaderPersonalCubnet from "./HeaderPersonalCubnet/HeaderPersonalCubnet";

const Header = (props) => {

    return (
        <div className={cl.header} >
            Шапка
            <div className={cl.currentUserInfo} >
                <HeaderCurrentUser/>
                <HeaderPersonalCubnet/>
            </div>
        </div>
    );
};

export default Header;