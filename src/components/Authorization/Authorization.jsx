import React, {useState} from 'react';
import cl from './Authorization.module.css'
import Register from "./Register/Register";
import Login from "./Login/Login";


const Authorization = () => {
    const [register, setRegister] = useState(false)


    return (
        <div className={cl.authContainer}>
            {register ? <Register/> : <Login/>}
            <button onClick={() => setRegister((false))} >Логин</button>
            <button onClick={() => setRegister((true))} >Зарегистрироваться</button>
        </div>
    );
};

export default Authorization;