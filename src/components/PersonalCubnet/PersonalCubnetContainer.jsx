import React, {useEffect} from 'react';
import PersonalCubnet from "./PersonalCubnet";
import {getAuth} from "firebase/auth";
import {useDispatch} from "react-redux";
import {setUserProfile} from "../../reduxTollkit/slices/userProfileSlice";

const PersonalCubnetContainer = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            const userProfile =  {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                emailVerified: user.emailVerified,
            }
            dispatch(setUserProfile(userProfile))
        }
    }, [])


    return (
        <div>
            <PersonalCubnet/>
        </div>
    );
};

export default PersonalCubnetContainer;