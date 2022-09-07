import {EmailAuthProvider, getAuth, reauthenticateWithCredential} from "firebase/auth";

export const reAuthAPI = (data) => {
    const credential = EmailAuthProvider.credential( data.email, data.password)
    const user = getAuth().currentUser;
   return reauthenticateWithCredential(user, credential)
}