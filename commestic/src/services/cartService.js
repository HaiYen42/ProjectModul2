import axios from "../utils/baseAxios";

const baseURL="listCart";
const postCart= async(product)=>{
    return await axios.post(`${baseURL}`,product);
};
const getCart= async()=>{
    return await axios.get(`${baseURL}`);
};
const patchCart = async(id, data)=>{
    return await axios.patch(`${baseURL}/${id}`,data)
}
const deleteCart= async(id)=>{
    return await axios.delete(`${baseURL}/${id}`)
}


export {getCart, postCart, patchCart, deleteCart}