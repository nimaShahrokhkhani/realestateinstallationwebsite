import axios from 'axios';
let baseUrl = 'https://gilanfile.ir/';

const instance = axios.create({
    baseURL: baseUrl
});

let installationUrl = 'https://r.gilanfile.ir/';

const installationInstance = axios.create({
    baseURL: installationUrl
});

export default class Services {


    static signIn(requestData) {
        return instance.post(`/api/base/login`, {
            username: requestData.username,
            password: requestData.password,
        })
    }

    static async getActivationCode(requestData) {
        return installationInstance.post(`/api/devices/getActivationCode`, requestData)
    }
}
