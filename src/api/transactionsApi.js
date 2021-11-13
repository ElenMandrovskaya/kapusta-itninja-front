import axios from 'axios';

// ОТПРАВКА ТРАНЗАКЦИИ РАСХОДА
// пример запроса
// https://kapusta-finance-tracker.herokuapp.com/api/transactions/expense/618d6f49d6ef526ae14ea08a/?day=11&month=11&year=2021
//пример тела запроса 

export async function addExpTransactions() {
    // const transactionState = {
    //     "description": "Шоколад",
    //     "value": 50.00
    // }
    // const categoryId = '618d6f49d6ef526ae14ea093'
    // const day = '13'
    // const month = '11'
    // const year = '2021'

    const { data } = await axios.post(`/api/transactions/expence/${categoryId}/?day=${day}&month=${month}&year=${year}`, transactionState);
    console.log(data)
    return data;
  }
// пример запроса
// https://kapusta-finance-tracker.herokuapp.com/api/transactions/expense/618d6f49d6ef526ae14ea093/?day=11&month=11&year=2021
//пример тела запроса 
// {
//     "description": "Шоколад",
//     "value": 50.00
// }




// // https://kapusta-finance-tracker.herokuapp.com/api/transactions/expense/61881d846a0d3f73e0414dbb
// export async function addTransactions(transaction) {
//   const { data } = await axios.post(`/transactions/expence/${category}`, contact);
//   return data;
// }

// export async function editBalance({ id, ? }) {
//   const { data } = await axios.patch(`/transactions/${id}`, { ? });
//   return data;
// }

// export async function deleteTransactions(id) {
//   await axios.delete(`/transactions/${id}`);
//   return id;
// }

