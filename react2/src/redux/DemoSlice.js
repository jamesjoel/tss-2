import { createSlice } from '@reduxjs/toolkit'

let DemoSlice = createSlice({
    name : "abc",
    initialState : ["rohit", "amar", "vijay"],
    reducers : {
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            state.pop();
        }
    }
});

export default DemoSlice.reducer;
export let { add, remove } = DemoSlice.actions;

