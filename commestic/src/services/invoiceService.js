import axios from "../utils/baseAxios";

const baseURL="invoice";
const postInvoice = async(order)=>{
    return await axios.post(`${baseURL}`, order)
};
const getInvoice= async()=>{
    return await axios.get(`${baseURL}`)
};
const patchInvoice= async(id, data)=>{
    return await axios.patch(`${baseURL}/${id}`, data)
}
export {postInvoice,getInvoice, patchInvoice }