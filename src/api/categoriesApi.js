import axios from "axios";

export async function getCategoriesByExpense() {
    const {data} = await axios.get(`/api/categories/expense`);
    return data.result.categories;
};

export async function getCategoriesByIncome() {
    const { data } = await axios.get(`/api/categories/income`);
    return data.result.categories;
};
