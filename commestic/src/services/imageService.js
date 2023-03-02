import axios from "../utils/baseAxios";
const baseURL="image";

const postImage = async(image) => {
    return await axios.post(`${baseURL}`,image)
}

const getImage = async (id) => {
    return await axios.get(`${baseURL}/${id}`)
}

export {postImage,getImage}