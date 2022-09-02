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
                <Timer
                    setTimer={props.setTimer}
                    setSeconds={props.setSeconds}
                    seconds={props.seconds}
                    setTimerActive={props.setTimerActive}
                    timerActive={props.timerActive}
                />
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