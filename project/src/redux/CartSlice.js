import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

let addCart = createAsyncThunk();





let CartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter(val=> val._id != action.payload._id)
        },
        removeall(state, action){
            return [];
        }

    }
});

export default CartSlice.reducer;
export let { add, remove, removeall } = CartSlice.actions;

/*
    cart [
        {
            userid : "123",
            cartdetail : [
                {

                },
                {

                },
                {
                    
                }
            ],
        }
    ]


*/