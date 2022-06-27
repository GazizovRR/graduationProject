import fetch from 'node-fetch'
import {urls, header} from '../config/index'

const User = {
    createUser: async(params, headers=header) => {
        const response = await fetch(`${urls.petstore}user`, { method: 'POST', headers: headers, body: params })
        return response
    },
    getUser: async(username, headers=header) => {
        const response = await fetch(`${urls.petstore}user/${username}`, { method: 'GET', headers: headers })
        return response
    },
    deleteUser: async(username, headers=header) => {
        const response = await fetch(`${urls.petstore}user/${username}`, { method: 'DELETE', headers: headers })
        return response
    },
};

export default User