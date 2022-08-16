import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
//test commit

export const store = configureStore({
    reducer: {
        user : userReducer,
    }

})