import React from 'react';
import cl from './Navbar.module.css'
import Home from "./Home/Home";
import Chat from "./Chat/Chat";
import SendProject from "./SendProject/SendProject";


const Navbar = () => {
    return (
        <nav className={cl.nav} >
            <div className={cl.blockDescription} >
                <Home/>
                <Chat/>
                <SendProject/>
            </div>
        </nav>
    );
};

export default Navbar;