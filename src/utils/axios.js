import axios from 'axios';
let baseUrl = 'https://gilanfile.ir/';

const instance = axios.create({
    baseURL: baseUrl
});
export default instance;
