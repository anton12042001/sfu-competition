import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const [ seconds, setSeconds ] = useState(5);


    useEffect(() => {
        if (seconds > 0 && props.timerActive) {
            setTimeout(setSeconds, 1000, seconds - 1);
        } else {
            props.setTimerActive(false);
        }
    }, [ seconds, props.timerActive ]);

    return (
        <div>
            {seconds
                && <>
                    <div>{seconds}</div>
                </>

            }
        </div>
    );
}

export default Timer;