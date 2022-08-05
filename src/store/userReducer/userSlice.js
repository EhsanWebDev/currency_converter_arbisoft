import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        login_user: (state, action) => {
            const { user } = action.payload || {}
            state.user = user
        },
        logout: (state) => {
            state.user = null
        }
    }
})

export const { login_user, logout } = userSlice.actions

export const userReducer = userSlice.reducer