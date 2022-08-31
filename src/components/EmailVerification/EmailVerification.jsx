import React from 'react';
import {getAuth,} from "firebase/auth";

const EmailVerification = (props) => {

    const verificationMailSend = () => {
        const auth = getAuth()
        console.log(getAuth().currentUser.emailVerified)

    }


    return (
        <div>
            <div>На вашу электронную почту было отправлено письмо. Подтвердите, пожалуйста, свою почту</div>
            <div>
                <button onClick={props.verificationMail} >Прислать письмо еще раз</button>
            </div>
            <div>
                <button onClick={verificationMailSend} >Проверить подтверждение почты</button>
            </div>
        </div>
    );
};

export default EmailVerification;