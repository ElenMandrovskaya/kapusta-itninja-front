import axios from 'axios';

// ОТПРАВКА ТРАНЗАКЦИИ РАСХОДА

const transaction = {
    amount: "300",
    category: "Продукты",
    categoryId: "619026a94ff3aead8b416ea1",
    date: "17.11.2021",
    description: "мясо",
    typeTransaction: "Expenses",
  }
  

//   export async function addExpTransactions(transaction) {
//     const {value} = transaction
//     const splitDate = transaction.date.split('.')
//     const day = splitDate[0]
//     const month = splitDate[1]
//     const year = splitDate[2]
//     const { data } = await axios.post(`/api/transactions/expence/${categoryId}/?day=${day}&month=${month}&year=${year}`, description, value, transactionType);
//     console.log(data)
//     return data;
//   }
 
// пример запроса
// https://kapusta-finance-tracker.herokuapp.com/api/transactions/expense/619026a94ff3aead8b416ea4/?day=10&month=11&year=2021
// transaction это объект как ниже
// {
//     "description": "Шоколад",
//     "value": 50.00,
//      "transactionType": "Expenses",
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

