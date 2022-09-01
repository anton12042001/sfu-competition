import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import Timer from "../utils/Timer/Timer";

const EmailVerification = (props) => {
    const navigate = useNavigate()

    const redirectToLogin = () => {
        navigate('/authorization')
    }
    return (
        <div>
            <div>На вашу электронную почту было отправлено письмо. Подтвердите, пожалуйста, свою почту</div>
            <div>
                <button onClick={props.verificationMail} disabled={props.timer} >Прислать письмо еще раз</button>
                
            </div>
            <div>
                {props.sendMessageToMail && <div>Письмо успешно отправлено</div>}
            </div>
            <div>
                <button onClick={redirectToLogin}>Перейти к авторизации</button>
            </div>
        </div>
    );
};

export default EmailVerification;