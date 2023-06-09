import axios from 'axios';
import {API} from '../constents/ServerApi'

let Add = async (obj)=>{
    let result = await axios.post(`${API}/product`, obj);
    return result.data;
}
let GetAll = async ()=>{
    let result = await axios.get(`${API}/product`);
    return result.data;
}
let Update = async (id, obj)=>{
    let result = await axios.put(`${API}/product/${id}`, obj);
    return result.data;
}
let Delete = async (id)=>{
    let result = await axios.delete(`${API}/product/${id}`);
    return result.data;
}
let GetOne = async (id)=>{
    let result = await axios.get(`${API}/product/${id}`);
    return result.data;
}

let GetAllByCategory = async (catename)=>{
    // localhost:3001/api/product/category/Electronic
    let result = await axios.get(`${API}/product/category/${catename}`);
    return result.data;
}
let GetAllBySubCategory = async (catename, subcatename)=>{
    // localhost:3001/api/product/category/Electronic
    let result = await axios.get(`${API}/product/subcategory/${catename}/${subcatename}`);
    return result.data;
}


export default { Add, Update, Delete, GetOne, GetAll, GetAllByCategory, GetAllBySubCategory };