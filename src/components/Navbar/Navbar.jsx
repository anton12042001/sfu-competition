import React from 'react';
import cl from './Navbar.module.css'
import Home from "./Home/Home";
import Chat from "./Chat/Chat";
import SendProject from "./SendProject/SendProject";
import {useSelector} from "react-redux";
import ShowProject from "./ShowProject/ShowProject";


const Navbar = () => {
    const {id} = useSelector(state => state.user)

    return (
        <nav className={cl.nav} >
            <div className={cl.blockDescription} >
                <Home/>
                <Chat/>
                <SendProject/>
                {id === "RQcab3sITterORwtMsDKI1xDFt73" && <ShowProject/> }
            </div>
        </nav>
    );
};

export default Navbar;