import {getAuth, signInWithEmailAndPassword} from "firebase/auth";


export const loginAPI = (email,password) => {
    const auth = getAuth();
    return  signInWithEmailAndPassword(auth, email, password)
}