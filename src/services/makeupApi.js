import axios from "axios";

export const getData = async () => {
    try {
       const {data} = await axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};