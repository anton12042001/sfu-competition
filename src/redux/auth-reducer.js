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
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export const setUser = (email, token, id) => ({type: SET_USER, payload:{email, token, id},})