import fetch from 'node-fetch'
import urls from '../config/urls'

const Store = {
    placeOrder: async(header, params) => {
        const response = await fetch(`${urls.petstore}store/order`, { method: 'POST', headers: header, body: params })
        return response
    },
    getOrder: async(header, id) => {
        const response = await fetch(`${urls.petstore}store/order/${id}`, { method: 'GET', headers: header })
        return response
    },
    deleteOrder: async(header, id) => {
        const response = await fetch(`${urls.petstore}store/order/${id}`, { method: 'DELETE', headers: header })
        return response
    },
};

export default Store