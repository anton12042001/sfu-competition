import {getAuth, sendEmailVerification} from "firebase/auth";


export const sendMessagesAPI = (props) => {
    const auth = getAuth();
    return  sendEmailVerification(auth.currentUser)
}