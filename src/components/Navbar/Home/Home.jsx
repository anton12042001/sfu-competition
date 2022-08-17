import React from 'react';
import cl from '../Navbar.module.css'
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className={cl.item}>
            <NavLink className={(navData) => navData.isActive ? cl.active : ''} to="/content">
                <div className={cl.containerActive}>
                    <div className={cl.NavbarItemsActive}>
                        <div className={cl.NavbarTextActive}>Главная</div>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Home;