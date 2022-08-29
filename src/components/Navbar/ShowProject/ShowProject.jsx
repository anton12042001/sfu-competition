import React from 'react';
import cl from '../Navbar.module.css'
import {NavLink} from "react-router-dom";

const ShowProject = () => {
    return (
        <div className={cl.item}>
            <NavLink className={(navData) => navData.isActive ? cl.active : ''} to="/adminsShowProject">
                <div className={cl.containerActive}>
                    <div className={cl.NavbarItemsActive}>
                        <div className={cl.NavbarTextActive}>Проекты пользователей</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default ShowProject;