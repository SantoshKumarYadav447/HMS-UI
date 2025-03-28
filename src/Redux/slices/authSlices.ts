import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginRequest: (state) => {
            state.loading = true
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.user = action.payload
        },
        loginFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})


