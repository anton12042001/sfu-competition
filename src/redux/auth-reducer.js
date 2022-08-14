import React from "react"

const SET_USER = "SET_USER"


let initialState = {
    email: null,
    token: null,
    id: null,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            debugger
            return {
                ...state,
                email: action.payload.email,
                token: action.payload.token,
                id: action.payload.id,
            }
            default:
            return state;
    }
}

export  const setUser = ({email, token, id}) => ({type: SET_USER, payload: {email, token, id}})
export default authReducer