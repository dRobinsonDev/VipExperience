import axios from 'axios';

const BASE_URL = 'http://vipexperiences.herokuapp.com';

export function getCartItems(cart) {
	return axios.post(`${BASE_URL}/api/products`, {cart})
		.then(response => response.data);
}

export function getProducts() {
    const options = {
        mode: 'cors',
		headers: {
        'Access-Control-Allow-Origin':'*',
        'content-type': 'application/json'
		}
    }
	return axios.get(`${BASE_URL}/api/products`, options)
		.then(response => response.data);
}

export function isAuthenticated(){
	return localStorage.getItem('token') 
}
