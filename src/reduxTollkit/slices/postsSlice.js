import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: []
}




const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost(state,action) {
            debugger
            let newPost = {
                title: action.payload.title,
                body: action.payload.body,
            }
            state.posts.push(action.payload)
        }
    },
})
export const {setPost} = postsSlice.actions

export default  postsSlice.reducer