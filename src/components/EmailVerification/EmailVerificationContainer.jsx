import React from 'react';
import EmailVerification from "./EmailVerification";
import {getAuth, sendEmailVerification} from "firebase/auth";

const EmailVerificationContainer = () => {

    const verificationMail = () => {
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
            .then(() => {
            })
    }


    return (
        <div>
            <EmailVerification verificationMail={verificationMail}/>
        </div>
    );
};

export default EmailVerificationContainer;