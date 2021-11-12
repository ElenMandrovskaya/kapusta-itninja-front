import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-finance-tracker.herokuapp.com';

export async function signUp(credentials) {
    const data = await axios.post(`/api/user/signup`, credentials);
    return data;
};

export async function signIn(credentials) {
    const data = await axios.post(`/api/user/login`, credentials);
    return data;
};

export async function getCurrentUser() {
    const data = await axios.get(`/api/user/current`);
    return data;
};

export async function signOut() {
    const data = await axios.post(`/api/user/logout`);
    return data;
};
