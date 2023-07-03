import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
let getAllStu = createAsyncThunk("fetch", async ()=>{
   
    let result = await axios.get("http://localhost:3001/student");
    return result.data;
});

let delStu = createAsyncThunk("delete", async(obj)=>{
    let result = await axios.delete("http://localhost:3001/student/"+obj.id);
    return obj;
})
let addStu = createAsyncThunk("save", async(obj)=>{
    let result = await axios.post("http://localhost:3001/student/", obj);
    return result.data;
})

let editStu = createAsyncThunk('edit', async(obj)=>{
    let result = await axios.put("http://localhost:3001/student/"+obj.id, obj);
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
        },
        [editStu.fulfilled] : (state, action)=>{
            return state.map(val=>{
                if(val.id == action.payload.id){
                    return action.payload;
                }else{
                    return val;
                }
            })
        }
    }
})

export default StudentSlice.reducer;

export { getAllStu, delStu, addStu, editStu };


/*


Redux --- Store ---  top level store (state) + data changes fun (action)
Redux+Thunk 

let addThunk = cre('x', async(obj)=>{
    axios
    return "amar"
})

Slice

initState : ["rohit"],
reducer : {
    add(state, action){
        state.push(action.payload)
    },
    remove(state, action){
        return state.filter(val, index=> index != action.payload)
    }
}

extraReducer : {
    [addThunk.fulfill] : (state, action)=>{
        state.push(action.payload)
    }
}



Compoent : 

    disp(addThunk("amar"));

    disp(remove(3));



*/