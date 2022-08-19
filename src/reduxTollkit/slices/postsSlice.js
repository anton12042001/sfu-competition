import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    posts: []
}




const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost(state,action) {
            let newPost = {
                title: action.payload.title,
                body: action.payload.body,
                image: action.payload.image,
            }
            debugger
            state.posts.push(newPost)
        }
    },
})
export const {setPost} = postsSlice.actions

export default  postsSlice.reducer