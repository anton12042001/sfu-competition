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
        editUserProfile(state,action) {
            debugger
            state.displayName = action.payload
        }
    },
})
export const {setUserProfile,editUserProfile} = userProfileSlice.actions

export default  userProfileSlice.reducer