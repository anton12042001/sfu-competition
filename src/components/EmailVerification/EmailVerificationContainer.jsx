import React, {useState} from 'react';
import EmailVerification from "./EmailVerification";
import {getAuth, sendEmailVerification} from "firebase/auth";

const EmailVerificationContainer = () => {
    const [sendMessageToMail, setSendMessageToMail] = useState(false)
    const [timer,setTimer] = useState(false)


    const verificationMail = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setTimer(true)
                setSendMessageToMail(true)
                setTimeout(() => setTimer(false),5000)
                setTimerActive(true)
            })
    }


    return (
        <div>
            <EmailVerification

                sendMessageToMail={sendMessageToMail}
                verificationMail={verificationMail}
            />
        </div>
    );
};

export default EmailVerificationContainer;