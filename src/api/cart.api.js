import apiClient from "../config/axios.config"


const getAllCartItems = async()=>{
    //api for get all cart items
    try {
        const response = await apiClient.get("/user/cart");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


export default {
    getAllCartItems,
}