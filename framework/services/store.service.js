import fetch from 'node-fetch'
import {urls, header} from '../config/index'

const Store = {
    placeOrder: async(params, headers=header) => {
        const response = await fetch(`${urls.petstore}store/order`, { method: 'POST', headers: headers, body: params })
        return response
    },
    getOrder: async(id, headers=header) => {
        const response = await fetch(`${urls.petstore}store/order/${id}`, { method: 'GET', headers: headers })
        return response
    },
    deleteOrder: async(id, headers=header) => {
        const response = await fetch(`${urls.petstore}store/order/${id}`, { method: 'DELETE', headers: headers })
        return response
    },
};

export default Store