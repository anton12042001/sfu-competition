import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: []
}




const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost(state,action) {
            state.posts.push(action.payload)
        }
    },
})
export const {setPost} = postsSlice.actions

export default  postsSlice.reducer