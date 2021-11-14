import axios from 'axios';

// РЕПОРТЫ ДЛЯ СВОДКИ (В ТРАЗАКЦАКШН ПЕЙДЖ)
// пример запроса РАСХОД GET
// https://kapusta-finance-tracker.herokuapp.com/api/reports/expense?year=2021

export async function getSummaryExpense() {
    const {data} = await axios.get(`/api/reports/expense?year=2021`);
    return data.result.finalReportArray;
};
// ответ
// {
//     "status": "success",
//     "code": 200,
//     "result": {
//         "finalReportArray": [
//             {
//                 "month": "11",
//                 "value": 15000
//             }
//         ]
//     }
// }


// пример запроса ДОХОД GET
// https://kapusta-finance-tracker.herokuapp.com/api/reports/income?year=2021

export async function getSummaryIncome() {
    const {data} = await axios.get(`/api/reports/expense?year=2021`);
    return data.result.finalReportArray;
};
// ответ 
// {
//     "status": "success",
//     "code": 200,
//     "result": {
//         "finalReportArray": [
//             {
//                 "month": "11",
//                 "value": 50000
//             }
//         ]
//     }
// }