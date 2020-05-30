import axios from 'axios';

const backendServer = 'http://localhost:3001';

export const getData = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(backendServer + url, {
            params: params
        }).then((response) => {
            console.log(response);
            resolve(response);
        }).catch((error) => {
            console.log(error);
            reject(error);
        }).finally(function () {
            console.log('API Complete');
        });
    });
}