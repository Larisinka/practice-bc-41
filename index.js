// Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total);
// const diff = grapes - apples;
// console.log(diff);

// Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);

// Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);

// Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// console.log(Math.floor(value));
// console.log(Math.ceil(value));
// console.log(Math.round(value));

// Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;

// const message = `${companyName} has ${repairBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// weight = weight.replace(",", ".");
// weight = Number.parseFloat(weight);
// height = Number.parseFloat(height);

// const bmi = weight / height ** 2;
// console.log(bmi.toFixed(1)); // 28.7

// Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4);

// console.log(10 >= "7");

// console.log("2" > "12");

// console.log("2" < "12");

// console.log("4" == 4);

// console.log("6" === 6);

// console.log("false" === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log("0" == false);

// console.log("0" === false);

// console.log("Papaya" < "papaya");

// console.log("Papaya" === "papaya");

// console.log(undefined == null);

// console.log(undefined === null);

// Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true && true);

// console.log(false && true);

// console.log(true && false);

// console.log(false && false);

// console.log(true || true);

// console.log(false || true);

// console.log(true || false);

// console.log(false || false);

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// Example 9 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01

// let totalMinutes = 1441;

// let hours = Math.floor(totalMinutes / 60);
// let minutes = totalMinutes % 60;

// let newHour = String(hours).padStart(2, 0);
// let newMinutes = String(minutes).padStart(2, 0);

// let result = `${newHour}:${newMinutes}`;

// console.log(result);

// Example 10 - Оператор % та методи рядків
// У змінній $year зберігається рік. Визначте, чи він високосний (у такому році є 29 лютого). Рік буде високосним у двох випадках: або він ділиться на 4, але при цьому не ділиться на 100, або ділиться на 400.

// const year = Number(prompt("Перевірь чи є рік високосним: "));

// const leapYear = (year % 4 === 0 && year / 100 !== 1) || year % 400 === 0;

// console.log(Boolean(leapYear));
