import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import postsReducer from "./slices/postsSlice"
import projectReducer from "./slices/projectSlice"
import userProfileReducer from "./slices/userProfileSlice"

export const store = configureStore({
    reducer: {
        user : userReducer,
        posts: postsReducer,
        project: projectReducer,
        userProfile : userProfileReducer
    }

})