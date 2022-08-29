import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: null,
    fullName: null,
    phone: null,
    project: null,
    showProject: [],
}



const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        getProject(state,action) {
            state.email = action.payload.email
            state.fullName = action.payload.fullName
            state.phone = action.payload.phone
            state.project = action.payload.project
        },
        removeProject(state,action) {
            state.email = null
            state.fullName = null
            state.phone = null
            state.project = null
        },
        adminShowProject(state,action) {
            debugger
            state.showProject.push(action.payload)
        }
    },
})
export const {getProject,removeProject,adminShowProject} = projectSlice.actions

export default  projectSlice.reducer