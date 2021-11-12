import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-finance-tracker.herokuapp.com';

// {
//     "name": "Elena",
//     "email": "dzyubahelen@gmail.com",
//     "password": "12345678"
// }
export async function signUp(credentials) {
    const data = await axios.post(`/user/signup`, credentials);
    return data;
};

export async function signIn(credentials) {
    const data = await axios.post(`/user/login`, credentials);
    return data;
};

export async function getCurrentUser() {
    const data = await axios.get(`/user/current`);
    return data;
};

export async function signOut() {
    const data = await axios.post(`/user/logout`);
    return data;
};
