// Модуль 3. Заняття 1. Об'єкти

// Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
// Код

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = `happy`;
// user.hobby = `skydiving`;
// user.premium = false;

// const userKeys = Object.keys(user);

// for (const key of userKeys) {
//   console.log(key + `: ` + user[key]);
//   //   console.log(user[key]);
// }

// // for (const element in userKeys) {
// //   console.log(userKeys[element]);
// // }

// console.log(user);

// Example 2 - метод Object.keys()
// Напиши функцію countProps(obj), що вираховує кількість властивостей в об'єкті. Функція повертає число – кількість властивостей.

// Виклики функцій для перевірки працездатності твоєї реалізації:

// function countProps(obj) {
//   return Object.keys(obj).length;
// }

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// Example 3 - метод Object.values()
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Якщо об'єкт employees порожній, то результат має бути 0.

// Код
// const countTotalSalary = function (employees) {
//   let totalSalary = 0;
//   const allSalary = Object.values(employees);
//   for (const salary of allSalary) {
//     totalSalary += salary;
//   }
//   return totalSalary;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// Example 4 - for...in
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників та повертає ім'я найпродуктивнішого (який виконав найбільше завдань). Співробітники і кількість виконаних завдань містяться як властивості об'єкта у форматі "ім'я": "кількість завдань".

// Виклики функцій для перевірки працездатності твоєї реалізації.

// function findBestEmployee(employees) {
//   let bestEmployer = 0;
//   let bestEmployerName = ``;
//   for (const employe in employees) {
//     if (bestEmployer < employees[employe]) {
//       bestEmployer = employees[employe];
//       bestEmployerName = employe;
//     }
//   }

//   return `The best employee ${bestEmployerName} did ${bestEmployer} tasks`;
// }

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// Example 5 - Масив об'єктів !!!!!!!!!!!!!!!НЕ СДЕЛАНА!!!!!!!!!!!!!!!!!!
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// Код
// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// console.log(calculateTotalPrice(stones, "Смарагд"));
// console.log(calculateTotalPrice(stones, "Діамант"));

// Example 6 - IsEmpty
// Напишіть метод, який робить поверхневу перевірку, чи об’єкт порожній

// Очікуваний результат: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false
// Порожні значення: "", null, NaN, undefined

// const isEmpty = (object) => {
//   let objectValues = Object.values(object);
//   let data3 = [];
//   for (const element of objectValues) {
//     if (element) {
//       data3.push(element);
//     }
//   }
//   if (data3.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };

// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

// Example 7 - calculator
// Створіть об'єкт calculator із трьома методами

// read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {},
//   sum() {},
//   mult() {},
// };

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty("key")) {
    keys.push(key);
    values.push(apartment[key]);
  }
  // Change code above this line
}

console.log(keys);
console.log(values);
