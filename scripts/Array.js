// 1.
// Створи масив з улюбленими фруктами (5-7 елементів).
// Виведи в консоль перший та останній фрукт.

// 2.
// До масиву з попередньої задачі додай новий фрукт на початок та кінець.
// Виведи оновлений масив.

// 3.
// Видали з масиву другий і третій фрукти.
// Виведи оновлений масив.

// 4.
// Є масив чисел [4, 8, 15, 16, 23, 42]. Обчисли суму всіх чисел.

// 5.
// У масиві [4, 8, 15, 16, 23, 42] знайди найбільше і найменше число.

// 6.
// Перевір, чи містить масив ['apple', 'banana', 'cherry'] фрукт 'banana'.
// Виведи в консоль true або false.

// 7.
// Відсортуй масив ['John', 'Anna', 'Zoe', 'Mark'] за алфавітом.

// 8.
// Обʼєднай масиви [1, 2, 3] і [4, 5, 6] в один.

// 9.
// Дано масив чисел [1, 2, 3, 4, 5]. Створи новий масив, де кожен елемент — квадрат відповідного числа.

// 1. Добуток чисел від 1 до number
// Напиши функцію calculateProduct(number), яка повертає добуток усіх цілих чисел від 1 до number включно.
// function calculateProduct(number) {
//   let produkt = 1;
//   let i = 1;
//   while (i <= number) {
//     produkt *= i;
//     i++;
//   }
//   return produkt;
// }

// 2. Сума парних чисел до number
// Напиши функцію sumEvenNumbers(number), яка повертає суму всіх парних чисел від 1 до number.
// function sumEvenNumbers(number) {
//   let sum = 0;
//   let i = 2;
//   while (i <= number) {
//     sum += i;
//     i += 2;
//   }
//   return sum;
// }

// 3. Сума непарних чисел до number
// Напиши функцію sumOddNumbers(number), яка повертає суму всіх непарних чисел від 1 до number.
// function sumOddNumbers(number) {
//   let sum = 0;
//   let i = 1;
//   while (i <= number) {
//     sum += i;
//     i +=2 ;
//   }
//   return sum;
// }

// 4. Підрахунок кількості дільників
// Напиши функцію countDivisors(number), яка повертає кількість чисел, на які number ділиться без остачі.
// function countDivisors(number) {
//   let quotient = 1;
//   let i = 1;
//   while (i <= number) {
//     if (number % i === 0) {
//       quotient++;
//     }
//     i++;
//   }
//   return quotient;
// }

// 5. Сума квадратів чисел
// Напиши функцію sumOfSquares(number), яка повертає суму квадратів усіх чисел від 1 до number.

//
// const book = {
//   title,
//   author,
//   genre[],
//   rating,
// };
// Створи об’єкт product для інтернет-магазину з властивостями: назва, ціна, категорія та масив доступних кольорів. Додай ще одну властивість — inStock зі значенням true.

// const product = {
//     productName:"T-shirt",
//     price:600,
//     colors: ["red", "blue", "green"],
//     inStock: true,
// };
// 4. Створи об’єкт car з властивостями: марка, модель, рік випуску та об’єкт owner, який містить ім’я та телефон власника. Виведи у консоль ім’я власника.
// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   owner: {
//     nameCar: "Oleksandr",
//     number: "76859403",
//   },
// };

// 5. Створи об’єкт movie з властивостями: назва, режисер, рік виходу, масив акторів та рейтинг. Зміни значення рейтингу на нове та виведи об’єкт у консоль.
// const movie = {
//   title: "ghjfkkk",
//   author: "hfjjfvjdnv",
//   year: "2012",
//   aktors: ["jkjvj", "jkjvjkvjk", "jsdjksjd"],
//   rating: "45",
// };
// (movie.rating = "99"), console.log(movie);
// 1. Створи об’єкт restaurant з властивостями: назва, тип кухні, рейтинг та масив доступних страв. Потім зміни рейтинг на нове значення та виведи об’єкт у консоль.
// сonst restaurant = {
//     restarauntName: "hjbhjbjhbjh",
//     cuisineType: "hbjhbhbhjbh",
//     rating: 66,
//     dishes: ["gggggg", "kkkkkk", "zzzzzzzzz", "yyyyyyy"],

// };
// restaurant.rating = 676;
// console.log(restaurant);

// 2. Створи об’єкт laptop з властивостями: бренд, модель, рік випуску, характеристики (як вкладений об’єкт з процесором, RAM та SSD) та наявність в магазині (inStock). Виведи в консоль модель та обсяг RAM.

// const laptop = {
//   brand: "qqqqq",
//   model: "eeeeeee",
//   year: 2022,
//   processor: {
//     RAM: 111111,
//     SSD: 666666,
//   },
//   inStock: true,
// };
// console.log(laptop.model, laptop.processor.RAM);

// 3. Створи об’єкт city з властивостями: назва, населення, країна та масив відомих пам’яток. Додай нову пам’ятку в масив і виведи об’єкт у консоль.
// const city = {
//   cityName: "bbbbbbbbb",
//   population: 123356,
//   country: "tytytytyt",
//   famousLandmarks: ["ooooooo", "hhhhhhh", "bbbbbbbb"],
// };
// city.famousLandmarks.push(nnnnnnn);

// 4. Створи об’єкт employee з властивостями: ім’я, прізвище, посада, зарплата та об’єкт контактів (телефон та email). Потім онови зарплату на нову і виведи об’єкт.
// const employee = {
//   firstName: "yyyyyyy",
//   lastName: "qqqqqqqqq",
//   position: "bbbbbbb",
//   salary: 5090,
//   contacts: {
//     phone: "66869707007",
//     email: "vjhfjhfvbjf",
//   },
// };
// employee.salary = 6900;

// 5. Створи об’єкт smartphone з властивостями: бренд, модель, операційна система, масив встановлених додатків та рейтинг. Видали один додаток із масиву та онови рейтинг, потім виведи об’єкт.
// const smartphone = {
//   brand: "nnmmmmmmm",
//   model: "xxxxxxxxx",
//   operatingSystem: "ncncncnncnc",
//   installedApps: ["gggg", "jjjjjj", "lllll", "eeeeee"],
//   rating: 6789,
// };
// smartphone.installedApps.splice(0, 1);
// smartphone.rating = 9999000;
// 1. Створення об’єкта користувача з контактами
// Створи об’єкт user з властивостями: firstName, lastName, age та contacts.
// contacts повинен бути об’єктом з властивостями email та phone.
// Виведи у консоль електронну пошту користувача.

// const user = {
//     firstName: "bbbbbbbb",
//     lastName: "dddddddd",
//     age: 56,
//     contacts: {
//         email: "hhhhhh",
//         phone: "ddddddddd",
//     },

// }console.log(user.contacts.email);

// 2. Магазин з вкладеними характеристиками продукту
// Створи об’єкт product з властивостями: name, price, category та specs.
// specs — це об’єкт з властивостями weight, dimensions та color.
// Зміни колір продукту та виведи об’єкт у консоль.
// const product = {
//     productName: "cccccccccc",
//     price: 6666666,
//     category: "opppppp",
//     specs: {
//         weight: "354",
//         dimensions: "54",
//         color: "blu",

//     }
// }product.specs.color = "white";

// 3. Автомобіль з власником
// Створи об’єкт car з властивостями: brand, model, year та owner.
// owner — об’єкт з властивостями name та licenseNumber.
// Виведи у консоль ім’я власника автомобіля.

// const car = {
//     brand:"hfggfgfgf",
//     model:"gfgfgfgfg",
//     year:2010,
//     owner: {
//         clientseName: "gfgfgfgfgfg",
//         clicenseNumber:"8796058776",
//     }
// }console.log(car.owner.clientseName);

// // 4. Книга з видавництвом
// // Створи об’єкт book з властивостями: title, author, year та publisher.
// // publisher — об’єкт з властивостями name та location.
// // Виведи у консоль назву видавництва книги.
// const book = {
//   title: "iiiiiiii",
//   author: "xxxxxxxxxx",
//   year: 2018,
//   publisher: {
//     publisherName: "rtryryryr",
//     location: "xzxzxzxzxz",
//   },
// };
// console.log(book.publisher.publisherName);

// 5. Кінофільм з додатковими деталями
// Створи об’єкт movie з властивостями: title, director, year та details.
// details — об’єкт з властивостями actors (масив акторів) та rating.
// Змініть рейтинг фільму та виведіть об’єкт у консоль.
// const movie = {
//   title: "rerererere",
//   director: "iuiuiuiuiu",
//   year: 2020,
//   details: {
//     actors: ["fdfdfdfd", "fdfdfdfd", "zxzxzxzx", "uyuyuyuy"],
//     rating: 345,
//   },
// };
// movie.details.rating = 234;

// 1. Інформація про користувача
// Створи об’єкт user з властивостями: firstName, lastName, age.
// Виведи у консоль повне ім’я користувача (через доступ до firstName та lastName).
// const user = {
//   firstName: "gfgfgfgfg",
//   lastName: "dsdsdsdsds",
//   age: 54,
// };
// console.log(user.firstName, user.lastName);

// 2. Автомобіль
// Створи об’єкт car з властивостями: brand, model, year.
// Виведи у консоль марку та рік випуску автомобіля.
// const car = {
//   brand: "gfgfgfgf",
//   model: "dsdsdsd",
//   year: 54,
// };
// console.log(car.brand, car.year);

// 3. Книга
// Створи об’єкт book з властивостями: title, author, pages.
// Виведи у консоль автора книги.
// const book = {
//   title: "gdfdfdfdf",
//   author: "cxcxcxcxc",
//   pages: 453,
// };
// console.log(book.author);

// 4. Фільм
// Створи об’єкт movie з властивостями: title, director, rating.
// Змініть рейтинг через доступ по крапці та виведіть його у консоль.

// const movie = {
//   title: "dfdfdfdf",
//   director: "cxvxcxcx",
//   rating: 56,
// };
// movie.rating = 78;
// console.log(movie.rating);

// 5. Продукт магазину
// Створи об’єкт product з властивостями: name, price, category.
// Виведи у консоль ціну продукту.
// Спробуй вивести властивість discount, якої немає в об’єкті, і подивись, що повернеться.
// // const product = {
// //   productName: "vcvcvcvcvcvc",
// //   price: 234,
// //   category: "fdfscfcdvvd",
// // };
// console.log(product.price);
// console.log(product.discount);
// Користувач із соціальними мережами
// Створи об’єкт user з властивостями: name, age та social.
// social — об’єкт з властивостями facebook, instagram та twitter.
// Виведи у консоль посилання на профіль в Instagram.
// const user = {
//     userName:"gfgfgfgfgf",
//     age:67,
//     social: {
//         facebook: "vcvcvcvcvcvc",
//         instagram: "ewewewewewe",
//         twitter:"mnmnmnmnmnmn",
//     }

// }console.log(user.social.instagram);

// 2. Магазин з товарами
// Створи об’єкт store з властивостями: name, location та products.
// products — масив об’єктів, кожен має productName, price та details (details містить weight та color).
// Виведи у консоль колір другого продукту у списку.

// const store = {
//   storeName: "uuuuuuu",
//   location: "uuuuuuuuu",
//   products: [
//     {
//       productName: "jhjhjhjhjh",
//       price: 45,
//       details: {
//         weight: "234",
//         color: "white",
//       },
//     },
//   ],
// };
// console.log(store.products[1].details.color);

// 3. Студент із оцінками
// Створи об’єкт student з властивостями: firstName, lastName та grades.
// grades — об’єкт з предметами, де кожен предмет містить score та teacher.
// Виведи у консоль ім’я вчителя з математики.
// const student = {
//   firstName: "wqwqwqwqw",
//   lastName: "iuiuiuiuiuiu",
//   grades: {
//     math: {
//       score: 95,
//       teacher: "Mr. Smith",
//     },
//     english: {
//       score: 88,
//       teacher: "Mrs. Johnson",
//     },
//   },
// };

// console.log(student.grades.math.teacher);

// Зміна ціни продукту
// Створи об’єкт product з властивостями: name, price та category.
// Зміни ціну продукту на нову і виведи об’єкт у консоль.
// const product = {
//   productName: "hdhhhfhdfh",
//   price: 134,
//   category: "hggfgfgfgfgfgf",
// };
// product.price = 14534;
// console.log(product);
// 2. Оновлення рейтингу фільму
// Створи об’єкт movie з властивостями: title, director, rating.
// Змініть рейтинг фільму на новий і виведіть об’єкт у консоль.
// const movie = {
//   title: "eerrerere",
//   director: "rerererre",
//   rating: 88,
// };
// movie.rating = 55;
// console.log(movie);

// 3. Зміна контактної інформації користувача
// Створи об’єкт user з властивостями: firstName, lastName та contacts (контакти — об’єкт з email і phone).
// Онови номер телефону користувача і виведи весь об’єкт.
// const user = {
//   firstName: "ggfgfgfg",
//   lastName: "gfgfgfgfgf",
//   contacts: {
//     email: "6576869",
//     phone: "gfhfhfvjjv",
//   },
// };
// user.contacts.phone = "898989899";
// console.log(user);

// 4. Оновлення статусу замовлення
// Створи об’єкт order з властивостями: orderId, product, status.
// Змініть статус замовлення (наприклад, з "processing" на "shipped") і виведіть об’єкт.
// const order = {
//   orderId: "",
//   product: "",
//   status: "processing",
// };
// order.status = "shipped";
// console.log(order);

// 5. Зміна характеристик смартфона
// Створи об’єкт smartphone з властивостями: brand, model, operatingSystem та specs (об’єкт з RAM та storage).
// Змініть обсяг RAM і операційну систему, потім виведіть об’єкт.
// const smartphone = {
//     brand: "",
//     model: "",
//     operatingSystem: "mmmmmmmmmmm",
//     specs: {
//         RAM: "hhhhhhh",
//         storage: "",
//     }
// }smartphone.specs.RAM= "cccccc";
// smartphone.operatingSystem = "bbbb";
// console.log(smartphone);

// 1. Додавання email користувачу
// Створи об’єкт user з властивостями firstName та lastName.
// Додай нову властивість email після створення об’єкта та виведи весь об’єкт у консоль.

// const user = {
//   firstName: "vvfvfvfv",
//   lastName: "bfbfbfbf",
// };
// user.email = "rrrrrrrr";
// console.log(user);

// 2. Додавання кольору автомобілю
// Створи об’єкт car з властивостями brand, model та year.
// Додай нову властивість color та виведи її в консоль.
// const car = {
//   brand: "jhbjhbhjb",
//   model: "iooooo",
//   year: 32,
// };
// car.color = "white";
// console.log(car.color);

// 3. Додавання рейтингу фільму
// Створи об’єкт movie з властивостями title та director.
// Додай властивість rating та виведи весь об’єкт у консоль.
// const movie = {
//   title: "jbjhbhb",
//   director: "opopopo",
// };
// movie.rating = "jnkjnjknkjn";
// console.log(movie);

// 4. Додавання знижки продукту
// Створи об’єкт product з властивостями name та price.
// Додай нову властивість discount (у відсотках) і виведи цю властивість у консоль.
// const product = {
//   productName: "nkjknkn",
//   price: plpppplp,
// };
// product.discount = hhhhb;
// console.log(product.discount);

// 5. Додавання номера телефону магазину
// Створи об’єкт store з властивостями name та location.
// Додай властивість phoneNumber та виведи весь об’єкт у консоль.
// const store = {
//   storeName: "hbjhbhb",
//   location: "kokkoko",
// };
// store.phoneNumber = "75757575856996";
// console.log(store);

// 1. Перебір користувача

// Створи об’єкт user з властивостями: firstName, lastName, age.
// Використай цикл for...in, щоб вивести всі ключі та їхні значення у консоль.
// const user = {
//   firstName: "bhbhbhhb",
//   lastName: "drdrr",
//   age: "lplpppl",
// };
// for (const key in user) {
//   console.log(key, ":", user[key]);
// }

// 2. Перебір автомобіля

// Створи об’єкт car з властивостями: brand, model, year, color.
// Перебери об’єкт циклом for...in і виведи у консоль тільки значення властивостей.
// const car = {
//   brand: "ggggggg",
//   model: "ddddddd",
//   year: "zzzzzzzz",
//   color: "pppppppp",
// };
// for (const key in car) {
//   console.log(car[key]);
// }

// 3. Перебір магазину

// Створи об’єкт store з властивостями: name, location, productsCount, isOpen.
// Використай for...in, щоб вивести повідомлення у форматі:
// const store = {
//   storeName: "oooooooo",
//   location: "yyyyyyyy",
//   productsCount: "tttttttt",
//   isOpen: "eEeeeeeee",
// };
// for (const key in store) {
//   console.log(`ключ: ${key} ,значення: ${store[key]}`);
// }

// Ключ: name, Значення: "АТБ"

// 4. Перебір книги

// Створи об’єкт book з властивостями: title, author, pages, rating.
// Перебери об’єкт і порахуй кількість властивостей, використовуючи цикл for...in.
// const book = {
//   title: "yyyyy",
//   author: "wwwww",
//   pages: "sssss",
//   rating: "ddddd",
// };
// let count = 0;
// for (const key in book) {
//   count++;
// }

// 5. Перебір студента

// Створи об’єкт student з властивостями: firstName, lastName, age, averageScore.
// Перебери всі ключі об’єкта і виведи в консоль тільки ті властивості, де значення є числом.
// const student = {
//   firstName: "ttttt",
//   lastName: "eeeee",
//   age: 89,
//   averageScore: 44,
// };
// for (const key in student) {
//   if (typeof student[key] === "number") {
//     console.log(`${key}: ${student[key]}`);
//   }
// }
// 1. Виведення ключів користувача
// Створи об’єкт user з властивостями firstName, lastName та age.
// Використай Object.keys(), щоб отримати масив ключів і вивести його в консоль.
// const user = {
//   firstName: "xxx",
//   lastName: "dddd",
//   age: "rrrr",
// };
// const keys = Object.keys(user);
// console.log(keys);
// 2. Підрахунок кількості властивостей об’єкта
// Створи об’єкт car з властивостями brand, model, year, color.
// За допомогою Object.keys() порахуй, скільки властивостей у об’єкта, і виведи число.
// const car = {
//   brand: "kkokook",
//   model: "uhuuhu",
//   year: "ggyyg",
//   color: "yyygyg",
// };
// const keys = Object.keys(car);
// console.log(keys.length);

// 3. Перевірка наявності властивостей
// Створи об’єкт book з будь-якими властивостями.
// За допомогою Object.keys() перевір, чи є в об’єкта властивості.
// Якщо немає – виведи повідомлення "Об’єкт порожній".
// const book = {
//   title: "uuu",
//   author: "ggg",
//   pages: 560,
//   rating: 55,
// };
// const keys = Object.keys(book);
// if (keys.length === 0) {
//   console.log("Об’єкт порожній");
// } else console.log("має обєкт властивості,[keys]");

// 4. Виведення всіх значень об’єкта через ключі
// Створи об’єкт student з властивостями name, age, grade.
// За допомогою Object.keys() перебери ключі та виведи значення властивостей.
// const student = {
//   studentname: "uuu",
//   age: "tttt",
//   grade: "eee",
// };
// const keys = Object.keys(student);
// for (const key of keys) console.log(student[key]);

// 5. Оновлення числових властивостей об’єкта
// Створи об’єкт product з властивостями name, price, category.
// За допомогою Object.keys() збільш усі числові властивості на 10%.
// const product = {
//   productName: "yy",
//   price: "55",
//   category: "ww",
// };
// const keys = Object.keys(product);
// for (const key of keys) {
//   if (typeof product[key] === "number") {
//     product[key] = product[key] * 1.1;
//   }
// }
// console.log(product);
// Виведення всіх значень об’єкта
// Створи об’єкт user з властивостями firstName, lastName, age.
// За допомогою Object.values() виведи всі значення властивостей у консоль.
// const user = {
//   firstName: "uu",
//   lastName: "rrr",
//   age: 55,
// };
// const values = Object.values(user);
// console.log(values);

// Сумування числових властивостей
// Створи об’єкт grades з предметами та оцінками учня.
// За допомогою Object.values() обчисли суму всіх оцінок.
// const grades = {
//   name: "John",
//   math: 90,
//   english: 85,
//   history: 78,
//   science: 92,
// };
// const values = Object.values(grades);
// let sum = 0;
// for (const value of values) {
//   if (typeof value === "number") {
//     sum += value;
//   }
// }
// console.log("сума оцінок:", sum);

// Перевірка на наявність значень
// Створи об’єкт settings з будь-якими властивостями.
// За допомогою Object.values() перевір, чи всі значення не порожні. Якщо хоча б одне порожнє, виведи повідомлення "Є порожні значення".
// const settings = {
//   theme: "dark",
//   fontSize: 16,
//   language: "en",
//   notifications: true,
// };
// const values = Object.values(settings);
// for (const value of values) {
//   if (!value) {
//     console.log("Є порожні значення");
//   } else {
//     console.log("Порожніх значень немає");
//   }
// }

// Виведення лише текстових значень
// Створи об’єкт book з властивостями title, author, pages, rating.
// За допомогою Object.values() виведи у консоль лише ті значення, які є рядками.
// const book = {
//   title: "jjjj",
//   author: "yyyy",
//   pages: 99,
//   rating: 45,
// };
// const values = Object.values(book);
// for (const value of values) {
//   if (typeof value === "string") {
//     console.log(value);
//   }
// }

// Множення числових значень
// Створи об’єкт product з властивостями price, discount, weight (числові) та name (рядок).
// За допомогою Object.values() виведи новий масив, де всі числові значення збільшено на 10%, а рядкові залишаються без змін.
// const product = {
//   price: 88,
//   discount: 77,
//   weight: 146,
//   name: "ghghghg",
// };
// const values = Object.values(product);
// for (const value of values) {
//   if (typeof product[key] === "number") {
//     const value = value * 1.1;
//   }
// }
// console.log(product);
// Список користувачів
// Створи масив об’єктів users, де кожен об’єкт містить firstName, lastName та age.
// Виведи у консоль ім’я та прізвище всіх користувачів.
// const users = [
//   { firstName: "yhyhyh", lastName: "YYYY", age: 88 },
//   { firstName: "Anna", lastName: "Smith", age: 25 },
//   { firstName: "John", lastName: "Doe", age: 30 },
// ];

// for (const user of users) {
//   console.log(user.firstName, user.lastName);
// }
// Колекція книг
// Створи масив об’єктів library, де кожна книга має title, author, pages та rating.
// Виведи назви всіх книг з рейтингом більше 4.
// const library = [
//   { title: "uuu", author: "YYY", pages: "44", rating: 13 },
//   { title: "ppp", author: "rrrr", pages: 88, rating: 55 },
//   { title: "uuuu", author: "cccc", pages: 99, rating: 3 },

//   { title: "hhh", author: "vvvv", pages: 66, rating: 2 },
// ];
// for (const book of library) {
//   if (book.rating > 4) {
//     console.log(book.author);
//   }
// }

// Інвентар магазину
// Створи масив об’єктів products, де кожен продукт має name, price та category.
// Обчисли загальну вартість усіх продуктів.
// const products = [
//   { productsName: "iiiii", price: 44, category: "yuyuy" },
//   { productsName: "ddddd", price: 12, category: "fff" },
//   { productsName: "bb", price: 38, category: "nmn" },
//   { productsName: "www", price: 108, category: "ppp" },
// ];
// let sum = 0;
// for (const product of products) {
//   sum += product.price;
// }
// console.log("вартість всіх продуктів", sum);
// Студенти та оцінки
// Створи масив об’єктів students, де кожен студент має name, age та averageScore.
// Виведи імена студентів, у яких середній бал більше 85.
const students = [
  { studentsName: "iiiii", age: 99, averageScore: 77 },
  { studentsName: "pp", age: 18, averageScore: 106 },
  { studentsName: "vbv", age: 44, averageScore: 127 },
  { studentsName: "lll", age: 16, averageScore: 36 },
];
for (const student of students) {
  if (students.averageScore > 85) {
    console.log(student.studentsName);
  }
}
// Список автомобілів
// Створи масив об’єктів cars, де кожен автомобіль має brand, model, year та color.
// Виведи у консоль моделі автомобілів, випущених після 2015 року.

// const cars = [
//   { brand: "yy", model: "eee", year: 2016, color: "hghgh" },
//   { brand: "sasa", model: "rrr", year: 2013, color: "ygyg" },
//   { brand: "gfgf", model: "tgtgt", year: 2023, color: "hgtgg" },
// ];
// for (const car of cars) {
//   if (car.year > 2015) {
//     console.log(car.model);
//   }
// }

// Задача 1
// Створи масив об’єктів users, де кожен користувач має firstName, lastName та age.
// Знайди користувача за іменем John і виведи його об’єкт у консоль.
// const users = [
//   { firstName: "vgvvfcv", lastName: "gtgtg", age: 44 },
//   { firstName: "mmm", lastName: "qqqq", age: 32 },
//   { firstName: "John", lastName: "cdcff", age: 56 },
// ];
// const nameToSearch = "John";
// for (const user of users) {
//   if (user.firstName === nameToSearch) {
//     console.log(user);
//   }
// }
// Задача 2
// Створи масив об’єктів library, де кожна книга має title, author, pages та rating.
// Знайди книгу з рейтингом понад 4.5 та виведи її назву та автора.
// const library = [
//   { title: "vgvg", author: "bhbh", pages: 143, rating: 5.0 },
//   { title: "bhb", author: "zs", pages: 100, rating: 7.0 },
//   { title: "mkm", author: "njn", pages: 199, rating: 3.0 },
// ];

// for (const book of library) {
//   if (book.rating > 4.5) {
//     console.log(book.title, book.author);
//   }
// }

// Задача 3
// Створи масив об’єктів products, де кожен продукт має name, price та category.
// Знайди перший продукт у категорії "electronics" і виведи його в консоль.
// const products = [
//   { productName: "bhvbbgb", price: 33, category: "electronics" },
//   { productName: "mkm", price: 23, category: "electronics" },
//   { productName: "zc", price: 99, category: "electronics" },
// ];
// for (const product of products) {
//   if (product.category === "electronics") {
//     console.log(product.productName);
//     break;
//   }
// }
// Задача 4
// Створи масив об’єктів students, де кожен студент має name, age та averageScore.
// Знайди студента з найвищим балом (averageScore) і виведи його ім’я та бал.
// const students = [
//   { studentName: "jnjj", age: 77, averageScore: 66 },
//   { studentName: "vfvf", age: 34, averageScore: 98 },
//   { studentName: "bh", age: 55, averageScore: 118 },
// ];
// let topStudent = students[0];
// for (const student of students) {
//   if (student.averageScore > topStudent.averageScore) {
//     topStudent = student;
//   }
// }
// console.log(topStudent.studentName, topStudent.averageScore);

// Задача 5
// Створи масив об’єктів movies, де кожен фільм має title, director та year.
// Знайди фільм режисера "Steven Spielberg" і виведи його назву та рік випуску.
// const movies = [
//   { title: "bvhbgh", director: "Steven Spielberg", year: 2012 },
//   { title: "vfvf", director: "bvbv", year: 2013 },
//   { title: "q", director: "mkmk", year: 2018 },
// ];
// const nameToSearch = "Steven Spielberg";
// for (const movie of movies) {
//   if ((movie.director === nameToSearch)) {
//     console.log(movie.title, movie.year);
//   }
// }
// 1️⃣ Імена користувачів

// Створи масив об’єктів users, де кожен користувач має firstName, lastName та age.
// Отримай новий масив, що містить тільки імена (firstName) усіх користувачів.
// const users = [
//   { firstName: "bhbh", lastName: "njnjj", age: 44 },
//   { firstName: "aaa", lastName: "ww", age: 23 },
//   { firstName: "cc", lastName: "aza", age: 36 },
// ];
// const firstNames = [];
// for (const user of users) {
//   firstNames.push(user.firstName);
// }

// 2️⃣ Назви книг

// Створи масив об’єктів books, де кожна книга має title, author, pages.
// Отримай новий масив, що містить лише назви (title) усіх книг.
// const books = [
//   { title: "bhvbvh", author: "njnj", pages: 77 },
//   { title: "mknh", author: "zs", pages: 104 },
//   { title: "iji", author: "we", pages: 77 },
// ];
// const titles = [];
// for (const book of books) {
//   titles.push(book.title);

// }console.log(titles);

// 3️⃣ Ціни продуктів

// Створи масив об’єктів products, де кожен продукт має name, price, category.
// Отримай новий масив, що містить усі ціни (price) продуктів.
// const products = [
//   { productName: "bvgfb", price: 123, category: "bhbh" },
//   { productName: "bv", price: 133, category: "mnj" },
//   { productName: "qw", price: 76, category: "po" },
// ];
// const prices = [];
// for (const product of products) {
//   prices.push(product.price);
// }

// 4️⃣ Марки автомобілів

// Створи масив об’єктів cars, де кожен автомобіль має brand, model, year.
// Отримай новий масив, що містить лише марки (brand) усіх автомобілів.
// const cars = [
//   { brand: "njhb", model: "juj", year: 2023 },
//   { brand: "juj", model: "xd", year: 2000 },
//   { brand: "njh", model: "pl", year: 2005 },
// ];
// const brands = [];
// for (const car of cars) {
//   brands.push(car.brand);
// }
// console.log(brands);

// 5️⃣ Рейтинги фільмів

// Створи масив об’єктів movies, де кожен фільм має title, director, rating.
// Отримай новий масив, що містить усі рейтинги (rating) фільмів.
// const movies = [
//   { title: "bvg", director: "nfjfn", rating: 8 },
//   { title: "bh", director: "yyy", rating: 6 },
//   { title: "mk", director: "hgyhg", rating: 10 },
//   { title: "bhg", director: "der", rating: 7 },
// ];
// const ratings = [];
// for (const movie of movies) {
//   ratings.push(movie.rating);
// }
// console.log(ratings);

// ✅ Задача 1
// Створи об’єкт bookShelf, який містить масив книг у властивості books та метод:
// getBooks() — повертає масив усіх книг.
// const bookShelf = {
//   books: [],
//   getBooks() {
//     return books;
//   },
// };
// bookShelf.getBooks;

// ✅ Задача 2
// Додай у об’єкт bookShelf метод
// addBook(bookName) — який додає нову книгу у масив books.
// const bookShelf = {
//   books: [],
//   addBook(bookName) {
//     this.books.push(bookName);
//     return this.books;
//   },
// };
