import axios from 'axios';
let baseUrl = 'http://api.gilanfile.ir/';

const instance = axios.create({
    baseURL: baseUrl
});
export default instance;
