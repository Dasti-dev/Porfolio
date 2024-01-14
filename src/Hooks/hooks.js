import axios from 'axios';

const apicall = async (url,data) => {
    try {
        return await axios.post(url, data);
        } catch (error) {
            throw error;
        } 
} 

export default apicall;