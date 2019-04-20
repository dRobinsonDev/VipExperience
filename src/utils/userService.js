import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function getUser() {
  return tokenService.getUserFromToken();
}

async function login(creds) {
	let response = await fetch(BASE_URL + 'login', {
		method: 'POST',
		headers: new Headers({ 'Content-Type': 'application/json' }),
		body: JSON.stringify(creds)
	}).then(res => res.json())
		.catch(err => console.log(err));
	if (response.err) {
		return response;
	}
	else {
		await tokenService.setToken(response.token);
		return { status: 'ok' }
	}
}

function logout() {
  tokenService.removeToken();
}

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}

export default {
  getUser,
  login,
  logout,
  signup, 
};