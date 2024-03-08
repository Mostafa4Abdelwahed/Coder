import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name:"auth",
    initialState: {
        user: null,
    },
    reducers: {
        login(state,action) {
            state.user = action.payload
        }
    }
})

const authReducer = authSlice.reducer
const authActions = authSlice.actions

export{authReducer, authActions}