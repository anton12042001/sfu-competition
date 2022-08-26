import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import postsReducer from "./slices/postsSlice"
import projectReducer from "./slices/projectSlice"

export const store = configureStore({
    reducer: {
        user : userReducer,
        posts: postsReducer,
        project: projectReducer,
    }

})