import fetch from 'node-fetch'
import urls from '../config/urls'

const Store = {
    placeOrder: async(header, params) => {
        const response = await fetch(`${urls.petstore}store/order`, { method: 'POST', header: header, body: params })
        return response
    },
    getOrder: async(header, id) => {
        const response = await fetch(`${urls.petstore}store/order/${id}`, { method: 'GET', header: header })
        return response
    },
    deleteOrder: async(header, id) => {
        const response = await fetch(`${urls.petstore}store/order/${id}`, { method: 'DELETE', header: header })
        return response
    },
};

export default Store