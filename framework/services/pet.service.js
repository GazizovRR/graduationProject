import fetch from 'node-fetch'
import { urls, header } from '../config/index'

const Pet = {
    findById: async(id) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'GET', header: header })
        return response
    },
    findByStatus: async(status) => {
        const response = await fetch(`${urls.petstore}pet/${status}`, { method: 'GET', header: header })
        return response
    },
    updateById: async(id, params) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'POST', header: header, body: params })
        return response
    },
    add: async(params) => {
        const response = await fetch(`${urls.petstore}pet`, { method: 'POST', header: header, body: params })
        return response
    },
    delete: async(id) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'DELETE', header: header })
        return response
    },
};

export default Pet