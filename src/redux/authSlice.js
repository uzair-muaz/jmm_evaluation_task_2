import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userToken: null, 
    userDetails: {
        email:'',
        phone:''
    },
    isAuthenticated:false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.userToken = `${action.payload.data.access_token}`;
            state.userDetails= {
                email:action.payload.data.email,
                phone:action.payload.data.phone
            }
            state.isAuthenticated = true
        },
        logoutSuccess: (state) => {
            state.userToken = null;
            state.userDetails= {
                email:'',
                phone:''
            },
            state.isAuthenticated = false
        },

    }
})
export const { logoutSuccess, loginSuccess } = authSlice.actions;

export default authSlice.reducer

// export const selectCurrentToken = (state) => initialState.userToken 
export const userToken = initialState.userToken;