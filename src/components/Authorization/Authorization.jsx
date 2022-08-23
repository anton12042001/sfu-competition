import React, {useState} from 'react';
import cl from './Authorization.module.css'
import LoginContainer from "./Login/LoginContainer";
import RegisterContainer from "./Register/RegisterContainer";


const Authorization = () => {
    const [register, setRegister] = useState(false)


    return (
        <div className={cl.authContainer}>
            <div className={cl.authContent} >
                {register ? <RegisterContainer/> : <LoginContainer/>}
                <div className={cl.authButton} >
                    <button onClick={() => setRegister((false))}>Логин</button>
                    <button onClick={() => setRegister((true))}>Зарегистрироваться</button>
                </div>
            </div>
        </div>
    );
};

export default Authorization;