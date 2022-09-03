import React from 'react';
import Timer from "../../utils/Timer/Timer";

const SendMessageToMailTimer = (props) => {
    return (
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
    );
};

export default SendMessageToMailTimer;