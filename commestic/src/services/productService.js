import axios from "../utils/baseAxios";

const baseURL="listProduct";
const getProduct= async()=>{
    return await axios.get(`${baseURL}`);
};
const deleteProduct = async(id)=>{
    return await axios.delete(`${baseURL}/${id}`)
}
const getProductId = async(id)=>{
    return await axios.get(`${baseURL}/${id}`)
}
const postProduct = async(data)=>{
    return await axios.post(`${baseURL}`, data)
}
const patchProduct = async(id, data)=>{
    return await axios.patch(`${baseURL}/${id}`,data)
}

export {getProduct, deleteProduct, getProductId, postProduct, patchProduct}