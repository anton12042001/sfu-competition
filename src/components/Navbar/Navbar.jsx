import React from 'react';
import cl from './Navbar.module.css'


const Navbar = () => {
    return (
        <div className={cl.navbar} >
            <div className={cl.navbarContent} >
                <div>Главная</div>
                <div>чат</div>
                <div>Загрузить проект</div>
            </div>
        </div>
    );
};

export default Navbar;