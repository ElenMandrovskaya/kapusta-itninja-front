import axios from 'axios';

export async function getCategoriesByExpense() {
    const data = await axios.get(`/api/categories/expense`);
    return data;
};
// ответ
{
//     "status": "success",
//     "code": 200,
//     "data": {
//         "categories": [
//             {
//                 "_id": "618d6f49d6ef526ae14ea089",
//                 "name": "Здоровье"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea08d",
//                 "name": "Развлечения"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea08f",
//                 "name": "Алкоголь"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea088",
//                 "name": "Коммуналка, связь"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea08c",
//                 "name": "Образование"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea087",
//                 "name": "Транспорт"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea08a",
//                 "name": "Продукты"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea08e",
//                 "name": "Все для дома"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea091",
//                 "name": "Прочее"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea08b",
//                 "name": "Техника"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea090",
//                 "name": "Спорт, хобби"
//             }
//         ]
//     }
// }

export async function getCategoriesByIncome() {
    const data = await axios.get(`/api/categories/income`);
    return data;
};
// ответ
// {
//     "status": "success",
//     "code": 200,
//     "data": {
//         "categories": [
//             {
//                 "_id": "618d6f49d6ef526ae14ea093",
//                 "name": "Доп. доход"
//             },
//             {
//                 "_id": "618d6f49d6ef526ae14ea092",
//                 "name": "ЗП"
//             }
//         ]
//     }
// }