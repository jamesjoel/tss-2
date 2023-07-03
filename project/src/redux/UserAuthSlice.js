import { createSlice } from '@reduxjs/toolkit'

const UserAuthSlice = createSlice({
    name : "auth",
    initialState : false,
    reducers : {
        loggedIn(state, action){
            return true;
        },
        loggedOut(state, action){
            return false;
        }
    }
})

export default UserAuthSlice.reducer;
export let { loggedIn, loggedOut } = UserAuthSlice.actions;