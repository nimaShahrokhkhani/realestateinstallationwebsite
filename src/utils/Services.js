import axios from 'axios';
let baseUrl = 'http://api.gilanfile.ir/';

const instance = axios.create({
    baseURL: baseUrl
});

let installationUrl = 'http://rapi.gilanfile.ir/';

const installationInstance = axios.create({
    baseURL: installationUrl
});

export default class Services {


    static signIn(requestData) {
        return instance.post(`/base/login`, {
            username: requestData.username,
            password: requestData.password,
        })
    }

    static async getActivationCode(requestData) {
        return installationInstance.post(`/devices/getActivationCode`, requestData)
    }
}
