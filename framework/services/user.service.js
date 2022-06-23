import fetch from 'node-fetch'
import urls from '../config/urls'

const User = {
    createUser: async(header, params) => {
        const response = await fetch(`${urls.petstore}user`, { method: 'POST', headers: header, body: params })
        return response
    },
    getUser: async(header, username) => {
        const response = await fetch(`${urls.petstore}user/${username}`, { method: 'GET', headers: header })
        return response
    },
    deleteUser: async(header, username) => {
        const response = await fetch(`${urls.petstore}user/${username}`, { method: 'DELETE', headers: header })
        return response
    },
};

export default User