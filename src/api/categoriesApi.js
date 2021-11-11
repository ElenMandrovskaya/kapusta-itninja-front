import axios from 'axios';

export async function getCategories() {
    const data = await axios.get(`/categories`);
    return data;
};