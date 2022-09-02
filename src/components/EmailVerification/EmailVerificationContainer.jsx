import React, {useEffect, useState} from 'react';
import EmailVerification from "./EmailVerification";
import {getAuth, sendEmailVerification} from "firebase/auth";

const EmailVerificationContainer = () => {
    const [sendMessageToMail, setSendMessageToMail] = useState(false)
    const [timer,setTimer] = useState(false)
    const [ timerActive, setTimerActive ] = useState(false);
    const [ seconds, setSeconds ] = useState(60);



    useEffect(() => {
        if (seconds === 60){
            setTimer(false)
        }
    },[seconds])

    const verificationMail = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setTimer(true)
                setSendMessageToMail(true)
                seconds !== 60 && setTimer(true)

                setTimerActive(true)
            })
    }


    return (
        <div>
            <EmailVerification
                seconds={seconds}
                setSeconds={setSeconds}
                setTimerActive={setTimerActive}
                timerActive={timerActive}
                timer={timer}
                setTimer={setTimer}
                sendMessageToMail={sendMessageToMail}
                verificationMail={verificationMail}
            />
        </div>
    );
};

export default EmailVerificationContainer;