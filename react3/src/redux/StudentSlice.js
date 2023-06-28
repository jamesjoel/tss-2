import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let getAllStu = createAsyncThunk("fetch", async ()=>{
    // axios.get("http://localhost:3000/student").then(result=>{
    //     console.log(result.data);
    //     return result.data;          
    // })
    let result = await axios.get("http://localhost:3000/student");
    return result.data;
});

let delStu = createAsyncThunk("delete", async(obj)=>{
    let result = await axios.delete("http://localhost:3000/student/"+obj.id);
    return obj;
})
let addStu = createAsyncThunk("save", async(obj)=>{
    let result = await axios.post("http://localhost:3000/student/", obj);
    return result.data;
})


let StudentSlice = createSlice({
    name : "student",
    initialState : [],
    extraReducers : {
        [getAllStu.fulfilled] : (state, action)=>{
            return action.payload;
        },
        [delStu.fulfilled] : (state, action)=>{
            return state.filter(val=> val.id != action.payload.id);
        },
        [addStu.fulfilled] : (state, action)=>{
            state.push(action.payload);
        }
    }
})

export default StudentSlice.reducer;

export { getAllStu, delStu, addStu };