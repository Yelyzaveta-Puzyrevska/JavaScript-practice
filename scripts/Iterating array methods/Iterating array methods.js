// Задача 1
// Напиши функцію processUser(name, callback), яка виводить у консоль "Processing user <name>" і викликає передану колбек-функцію callback, передаючи їй ім’я користувача.
// Створи колбек-функції greet і farewell, які вітають користувача та прощаються з ним.
// function processUser(name, callback) {
//   console.log(`Processing user ${name}`);
//   callback(name);
// }
// function greet(name) {
//   console.log(`Hello ${name}`);
// }
// function farewell(name) {
//   console.log(`Good bye ${name}`);
// }

// // Задача 2
// // Функція calculate(a, b, callback) отримує два числа та колбек-функцію.
// // Колбек може виконувати додавання, віднімання, множення або ділення.
// // Використай її для обчислення результатів різних операцій з числами 10 і 5.
// function calculate(a, b, callback) {
//   return callback(a, b);
// }

// function add(a, b) {
//   return a + b;
// }
// function subtract(a, b) {
//   return a - b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   return a / b;
// }

// Задача 3
// Напиши функцію downloadFile(fileName, callback), яка спершу виводить "Starting download <fileName>", а потім викликає колбек, щоб повідомити, що файл успішно завантажений.
// Створи два колбеки: notifySuccess і logSuccess.
// function downloadFile(fileName, callback) {
//   console.log(`Starting download ${fileName}`);
//   callback(fileName);
// }
// function notifySuccess(fileName) {
//   console.log(`File ${fileName} was downloaded successfully!`);
// }
// function logSuccess(fileName) {
//   console.log(`Download complete: ${fileName}`);
// }

// Задача 1
// Створи стрілочну функцію square, яка приймає число і повертає його квадрат.
// const square = (n) => n * n;

// Задача 2
// Створи стрілочну функцію greet, яка приймає ім’я і виводить у консоль "Hello, <name>!".
// const greet = (klient) => console.log(`Hello, ${klient}!`);

// Задача 3
// Створи стрілочну функцію calculateTotalPrice, яка приймає кількість товарів і ціну за одиницю, та повертає загальну вартість.
// const calculateTotalPrice = (quantity, price) => quantity * price;

// Задача 1
// Даний масив чисел [1, 2, 3, 4, 5].
// Створи новий масив, у якому кожне число буде подвоєне, використовуючи метод map().
// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map((number) => number * 2);
// console.log(doubleNumbers);

// Задача 2
// Даний масив імен ["Alice", "Bob", "Charlie"].
// Створи новий масив, де кожне ім’я буде у верхньому регістрі, використовуючи map().
// const names = ["Alice", "Bob", "Charlie"];
// const NewNames = names.map((NewName) => NewName.toUpperCase());
// console.log(NewNames);

// Задача 3
// Даний масив об’єктів з інформацією про людей:
// const users = [
//   {name: "Alice", age: 25},
//   {name: "Bob", age: 30},
//   {name: "Charlie", age: 35}
// ];
// const names = users.map((user) => user.name);
// console.log(names);

// Задача 4
// Даний масив чисел [10, 20, 30, 40].
// Створи новий масив, де кожен елемент буде зменшений на 5, використовуючи map().
// const numbers = [10, 20, 30, 40];
// const newNumbers = numbers.map((number) => number - 5);
// console.log(newNumbers);

// Задача 5
// Даний масив рядків ["apple", "banana", "cherry"].
// Використовуючи map(), створи масив з довжинами кожного рядка.
// const fructs = ["apple", "banana", "cherry"];
// const fructsLength = fructs.map((fruct) => fruct.length);
// console.log (fructsLength);

// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням другого параметра color.
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };
