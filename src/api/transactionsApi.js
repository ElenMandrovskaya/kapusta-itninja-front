import axios from 'axios';

//https://kapusta-finance-tracker.herokuapp.com/api/transactions/expense
// export async function getExpTransactions(){
//     const { data } = await axios.get('/api/transactions/expense');
//     console.log(data)
//     return data.result.transactions;
// }

// // https://kapusta-finance-tracker.herokuapp.com/api/transactions/income
// export async function getIncTransactions(){
//     const { data } = await axios.get('/api/transactions/income');
//     return data.result.transactions;
// }

// ОТПРАВКА ТРАНЗАКЦИИ РАСХОДА
// объект приходящий с формы
// const transactions = {
//     value: "300",
//     category: "Продукты",
//     categoryId: "619026a94ff3aead8b416ea1",
//     date: "17.11.2021",
//     description: "мясо",
//     typeTransaction: "Expenses",
//   }
// пример запроса
// https://kapusta-finance-tracker.herokuapp.com/api/transactions/expense/619026a94ff3aead8b416ea4/?day=10&month=11&year=2021
  export async function addExpTransactions(transactions) {
    const splitDate = transactions.date.split('.')
    const day = splitDate[0]
    const month = splitDate[1]
    const year = splitDate[2]
    const newTransaction = {
        descreption: transactions.description,
        value: transactions.value,
        typeTransaction: transactions.typeTransaction
    }
    const { data } = await axios.post(`/api/transactions/expense/${transactions.categoryId}/?day=${day}&month=${month}&year=${year}`, newTransaction );
    console.log(data)
    return data.result;
  }
 
// ДОХОД
// https://kapusta-finance-tracker.herokuapp.com/api/transactions/income/619026a94ff3aead8b416ead/?day=11&month=11&year=2021
export async function addIncTransactions(transactions) {
    const splitDate = transactions.date.split('.')
    const day = Number(splitDate[0])
    const month = Number(splitDate[1])
    const year = Number(splitDate[2])
    const newTransaction = {
        descreption: transactions.description,
        value: transactions.value,
        typeTransaction: transactions.typeTransaction
    }
    const { data } = await axios.post(`/api/transactions/income/${transactions.categoryId}/?day=${day}&month=${month}&year=${year}`, newTransaction );
    console.log(data)
    return data.result;
  }

  // УДАЛЕНИЕ ТРАНЗАКЦИИ
  // https://kapusta-finance-tracker.herokuapp.com/api/transactions/61944953da2a3c0076d5ebdd
  // 

  export async function getIncTransactions(transactionId){
    const { data } = await axios.delete(`/api/transactions/${transactionId}`);
    return data;
  }

    export async function getExpTransactions(transactionId){
    const { data } = await axios.delete(`/api/transactions/${transactionId}`);
    return data;
}

// ОБНОВЛЕНИЕ БАЛАНСА ПРИ ДОБАВЛЕНИИ ТРАНЗАКЦИИ
// необходимо отправлять вместе с запросом на добавление транзакции
export async function editBalance() {
  const { data } = await axios.patch(`/api/user/balance`);
  return data;
}


