import {getAuth, sendEmailVerification} from "firebase/auth";


export const sendMessagesAPI = () => {
    const auth = getAuth();
    return  sendEmailVerification(auth.currentUser)
}