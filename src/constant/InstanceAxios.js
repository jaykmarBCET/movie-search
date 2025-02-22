import axios from 'axios';
import { baseUrl } from './movieUrl';

const token = import.meta.env.VITE_API_TOKEN;
const apiKey = import.meta.env.VITE_API_KEY;


const InstanceAxios = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: `Bearer ${token}`
    },
    params: {
        language: "en-US",
        api_key: apiKey 
    }
});

export { InstanceAxios };
