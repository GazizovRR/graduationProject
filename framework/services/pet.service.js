import fetch from 'node-fetch'
import {urls, header} from '../config/index'

const Pet = {
    add: async(params,headers=header) => {
        const response = await fetch(`${urls.petstore}pet`, { method: 'POST', headers: headers, body: params })
        return response
    },
    findById: async(id, headers=header) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'GET', headers: headers })
        return response
    },
    findByStatus: async(status, headers=header) => {
        const response = await fetch(`${urls.petstore}pet/findByStatus?status=${status}`, { method: 'GET', headers: headers })
        return response
    },
    updateById: async(id, params, headers=header) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'POST', headers: headers, body: params })
        return response
    },
    delete: async(id, headers=header) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'DELETE', headers: headers })
        return response
    },
};

export default Pet