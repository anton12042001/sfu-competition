import React, {useEffect, useState} from 'react';
import EmailVerification from "./EmailVerification";
import {sendMessagesAPI} from "../../api/sendEmailVerification/sendMessagesAPI";

const EmailVerificationContainer = () => {
    const [sendMessageToMail, setSendMessageToMail] = useState(false)
    const [timer,setTimer] = useState(false)
    const [ timerActive, setTimerActive ] = useState(false);
    const [ seconds, setSeconds ] = useState(60);
    const [infMessages, setInfMessages] = useState(false)



    const verificationMail = () => {
        sendMessagesAPI()
            .then(() => {
                setTimer(true)
                setSendMessageToMail(true)
                seconds !== 60 && setTimer(true)
                setTimerActive(true)
            })
            .catch(() => {
                setInfMessages(true)
            })
    }



    return (
        <div>
            <EmailVerification
                setTimer={setTimer}
                seconds={seconds}
                setSeconds={setSeconds}
                setTimerActive={setTimerActive}
                timerActive={timerActive}
                timer={timer}
                sendMessageToMail={sendMessageToMail}
                verificationMail={verificationMail}
            />
            {infMessages && <div>Возникла неизвестная ошибка... Повторите отправку через пару минут</div>}
        </div>
    );
};

export default EmailVerificationContainer;