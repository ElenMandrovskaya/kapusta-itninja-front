import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-finance-tracker.herokuapp.com';

export async function getCategoriesByCosts(month, year) {
  const { data } = await axios.get(
    `/api/reports/monthlyexpense/?month=${Number(month)}&year=${Number(year)} `,
  );
  console.log(data);
  return data;
}

export async function getCategoriesByIncome(month, year) {
  const { data } = await axios.get(
    `/api/reports/monthlyincome/?month=${Number(month)}&year=${Number(year)}`,
  );
  return data;
}
