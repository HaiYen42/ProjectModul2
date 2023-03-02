import axios from "../utils/baseAxios";
const baseURL="listuser";
const getUser= async()=>{
    return await axios.get(`${baseURL}`);
};

const postUser =async(email, password, name)=>{
    console.log(email);
    return await axios.post(`${baseURL}`, {email, password, name})
}

const deleteUser= async(id)=>{
    return await axios.delete(`${baseURL}/${id}`)
}
const getUserId= async(id)=>{
    return await axios.get(`${baseURL}/${id}`)
}
const putUser= async(id, data)=>{
    return await axios.patch(`${baseURL}/${id}`, data)
}

export {getUser, postUser, deleteUser, getUserId, putUser}
