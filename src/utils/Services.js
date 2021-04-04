import axios from 'axios';
let baseUrl = 'http://localhost:3600/';

const instance = axios.create({
    baseURL: baseUrl
});

let installationUrl = 'http://localhost:3650/';

const installationInstance = axios.create({
    baseURL: installationUrl
});

export default class Services {

    static baseUrl = 'http://localhost:3500/';

    static signIn(requestData) {
        return instance.post(`/login`, {
            username: requestData.username,
            password: requestData.password,
        })
    }

    static async getActivationCode(requestData) {
        return installationInstance.post(`/devices/getActivationCode`, requestData)
    }
}
