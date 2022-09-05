import React from 'react';
import {useSelector} from "react-redux";
import cl from './PersonalCubnet.module.css'
import ChangeFullName from "./ChangeFullName/ChangeFullName";
import ChangeFullNameContainer from "./ChangeFullName/ChangeFullNameContainer";

const PersonalCubnet = () => {
    const {displayName,email,photoURL,emailVerified} = useSelector(state => state.userProfile)

    return (
        <div className={cl.personalCubnetProfile} >
            <ChangeFullNameContainer displayName={displayName} />



            <div>Ваша почта: {email}</div>
            {photoURL ? <div>Ваша фотография: {photoURL}</div> : <div>У вас нет фотографии.</div>}
            {emailVerified ? <div>Ваша почта подтверждена.</div> : <div>Ваша почта не подтверждена. Скорее подтвердите ее</div>}
        </div>
    );
};

export default PersonalCubnet;