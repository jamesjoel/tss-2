import axios from 'axios';
import {API} from '../constents/ServerApi'

let Add = async (data)=>{
   
    let result = await axios.post(`${API}/category`, data);
    return result.data;
}

let GetAll = async()=>{
    let result = await axios.get(`${API}/category`);
    return result.data;
}

let AddSubCate = async (data)=>{
   
    let result = await axios.post(`${API}/category/subcategory`, data);
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

let exportObj = { Add, GetAll, AddSubCate };

export default exportObj;