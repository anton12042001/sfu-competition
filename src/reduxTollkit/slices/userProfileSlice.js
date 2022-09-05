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
        editUserProfileFullName(state,action) {
            state.displayName = action.payload
        },
        editUserProfileMail(state,action) {
            state.email = action.payload
        },
        removeUserProfile(state,action){
            state.displayName = null
            state.email = null
            state.photoURL = null
            state.emailVerified = null
        }
    },
})
export const {setUserProfile,editUserProfileFullName,removeUserProfile,editUserProfileMail} = userProfileSlice.actions

export default  userProfileSlice.reducer