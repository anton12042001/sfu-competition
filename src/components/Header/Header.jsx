import React from 'react';
import cl from './Header.module.css'
import HeaderCurrentUser from "./HeaderCurrentUser/HeaderCurrentUser";
import HeaderPersonalCubnet from "./HeaderPersonalCubnet/HeaderPersonalCubnet";
import {useSelector} from "react-redux";

const Header = (props) => {

    const {email} = useSelector(state => state.user)




    return (
        <div className={cl.header} >
            Шапка
            <div className={cl.currentUserInfo} >
                <HeaderCurrentUser/>
                {email && <HeaderPersonalCubnet/>}
            </div>
        </div>
    );
};

export default Header;