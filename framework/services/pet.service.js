import fetch from 'node-fetch'
import urls from '../config/urls'

const Pet = {
    add: async(header, params) => {
        const response = await fetch(`${urls.petstore}pet`, { method: 'POST', headers: header, body: params })
        return response
    },
    findById: async(header, id) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'GET', headers: header })
        return response
    },
    findByStatus: async(header, status) => {
        const response = await fetch(`${urls.petstore}pet/findByStatus?status=${status}`, { method: 'GET', headers: header })
        return response
    },
    updateById: async(header, id, params) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'POST', headers: header, body: params })
        return response
    },
    delete: async(header, id) => {
        const response = await fetch(`${urls.petstore}pet/${id}`, { method: 'DELETE', headers: header })
        return response
    },
};

export default Pet