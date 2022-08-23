import React from 'react';
import cl from '../Navbar.module.css'
import {NavLink} from "react-router-dom";

const SendProject = () => {
    return (
        <div className={cl.item}>
            <NavLink className={(navData) => navData.isActive ? cl.active : ''} to="/project">
                <div className={cl.containerActive}>
                    <div className={cl.NavbarItemsActive}>
                        <div className={cl.NavbarTextActive}>Загрузить проект</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default SendProject;