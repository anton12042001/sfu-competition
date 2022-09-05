import {getAuth, updateProfile} from "firebase/auth";

export const editProfileFullNameAPI = (data) => {
    const auth = getAuth();
    return updateProfile(auth.currentUser, {
        displayName: `${data.displayName}`
    })
}
