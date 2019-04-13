import axios from 'axios';

// const BASE_URL = 'http://vipexperiences.herokuapp.com';
const BASE_URL = 'http://localhost:5000'

export function getProducts() {
	return axios.get(`${BASE_URL}/api/products`, {
		mode: 'cors',
		headers:{
		'Access-Control-Allow-Origin':'*'
		}
	})
		.then(response => response.data);
}

export function getCartProducts(cart) {
	return axios.post(`${BASE_URL}/api/products`, {cart})
		.then(response => response.data);
}

export function isAuthenticated(){
	return localStorage.getItem('token');
}
