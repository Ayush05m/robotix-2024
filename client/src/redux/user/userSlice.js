import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
    userid : null,
    isAdmin : false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            console.log(action);
            state.userid = action.payload[0];
            state.username = action.payload[1];
            
        },
        signInFailure: (state, action) => {
            state.username = null,
            console.log(action);
            
        },
        adminAccess: (state) => {
            state.isAdmin = true;
        },
        logout: (state) =>{
            state.username = null;
        },
    },
})

export const { 
    signInSuccess, 
    signInFailure, 
    updateSuccess, 
    updateFailure,
    deleteUserSuccess,
    deleteUserFailure,
    logout
    } = userSlice.actions;
export default userSlice.reducer;
