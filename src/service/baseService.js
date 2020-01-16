import axios from 'axios';
const baseUrl = "http://192.168.2.10:8087"
const BaseService = axios.create(
    {
        baseURL: baseUrl
    }
);

export default BaseService;