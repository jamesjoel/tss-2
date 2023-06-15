import axios from 'axios';
import {API} from '../constents/ServerApi'

let Add = async (data)=>{
   
    let result = await axios.post(`${API}/category`, data);
    return result.data;
}

let Update = async (id, data)=>{
   
    let result = await axios.put(`${API}/category/${id}`, data);
    return result.data;
}

let GetAll = async()=>{
    let result = await axios.get(`${API}/category`);
    return result.data;
}


let deleteCate = async(obj)=>{
    let result = await axios.delete(`${API}/category/${obj._id}`)
    return result.data;
}
let deleteSubCate = async(obj, obj1)=>{
    let result = await axios.delete(`${API}/category/subcate/${obj._id}/${obj1}`)
    return result.data;
}

let AddSubCate = async (data)=>{
   
    let result = await axios.post(`${API}/category/subcategory`, data);
    return result.data;
}

let getSubCate = async(cateid)=>{
    let result = await axios.get(`${API}/category/subcate/${cateid}`);
    return result.data;
}


/*
let GetAll = (data)=>{
    return axios.post(`${API}/category`, formdata);
}
let Update = (data)=>{
    return axios.post(`${API}/category`, formdata);
}
let Delete = (data)=>{
    return axios.post(`${API}/category`, formdata);
}*/

let exportObj = { Add, GetAll, AddSubCate, deleteCate, getSubCate, deleteSubCate, Update };

export default exportObj;