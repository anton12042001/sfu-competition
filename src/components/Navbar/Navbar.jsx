import React from 'react';
import cl from './Navbar.module.css'
import Home from "./Home/Home";
import Chat from "./Chat/Chat";


const Navbar = () => {
    return (
        <nav className={cl.nav} >
            <div className={cl.blockDescription} >
                <Home/>
                <Chat/>
                <div>Загрузить проект</div>
            </div>
        </nav>
    );
};

export default Navbar;