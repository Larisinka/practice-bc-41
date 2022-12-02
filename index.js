// Модуль 4. Заняття 7. Коллбеки.Стрілочні функції.forEach

// Example 1 - Коллбек функції
// Напишіть наступні функції:

// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
// // Рішення
// function createProduct(obj, callback) {
//   const newObj = { ...obj, id: 1 };
// }

// function logProduct(newObj) {
//   console.log(newObj);
// }

// function logTotalPrice({ price, quantity }) {
//   const totalPrice = price * quantity;
//   console.log(totalPrice);
// }

// console.log(createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct));
// console.log(
//   createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice)
// );

// Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// // Рішення
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Jacob",
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`Success: ${message}`);
// }
// function handleError(message) {
//   console.log(`Error: ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека. Використай forEach() для перебору масива

// Рішення
// function each(array, callback) {
//   const newArr = [];
//   array.forEach((el) => {
//     newArr.push(callback(el));
//   });

//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   })
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   })
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   })
// );

// Example 4 - Метод forEach
// Створи стрілочну функцію logItems(), яка виводитьв консоль елементи масива, зроби перебір за допомогою методу forEach().

// const logItems = (array) => {
//   array.forEach((element, index) => {
//     console.log(element, index);
//   });
// };
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// Example 5 - Iterate an object
// За допомогою методу forEach() виведи всі name з об'єкта employees капслоком. Потім виведи у кого зарплата більше 12000 А в кінці підрахуй скільки компанія виплачує працівникам, скільки працівників є у компанії та виведи імена працівників, до прикладу Company pay 23000 for 2 employeers: Alex,Clark

// const employees = [
//   {
//     id: 101,
//     name: "Alex",
//     sal: 10000,
//   },
//   {
//     id: 102,
//     name: "Clark",
//     sal: 13000,
//   },
//   {
//     id: 103,
//     name: "John",
//     sal: 12000,
//   },
//   {
//     id: 104,
//     name: "Tony",
//     sal: 20000,
//   },
// ];

// let totalSum = 0;
// const names = [];

// const employeesName = employees.forEach(({ name, sal }) => {
//   //   console.log(name.toUpperCase());
//   //   if (sal > 12000) {
//   //     console.log(name);
//   //   }
//   totalSum += sal;
//   names.push(name);
// });

// console.log(totalSum);
// console.log(names);
// console.log(
//   `Компанія виплачує ${totalSum} для своїх ${employees.length} працівників: ${[
//     ...names,
//   ]} `
// );

// Example 6 - Count products
// Підрахуй і виведи новий об'єкт в якому буде підпраховано скільки яких продуктів в масиві products

// Oчікуваний результат
// {
//   apple: 2,
//   banana: 2,
//   avocado: 1,
//   cherry:1
// }

// const products = ["apple", "apple", "banana", "banana", "avocado", "cherry"];

// const countProducts = (products) => {
//   let newProduct = {};
//   products.forEach((product) => {
//     // console.log(newProduct.hasOwnProperty(products));
//     newProduct[product] = (newProduct[product] || 0) + 1;
//   });
//   console.log(newProduct);
// };

// countProducts(products);
