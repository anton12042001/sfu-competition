import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    displayName: null,
    email: null,
    photoURL: null,
    emailVerified: null,
}


const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setUserProfile(state, action) {
            state.displayName = action.payload.displayName
            state.email = action.payload.email
            state.photoURL = action.payload.photoURL
            state.emailVerified = action.payload.emailVerified
        },
    },
})
export const {setUserProfile} = userProfileSlice.actions

export default  userProfileSlice.reducer