// Ввод данных для пользователя 1
let name1 = prompt("Введите имя пользователя 1:");
let birthYear1 = parseInt(prompt("Введите год рождения пользователя 1:"));
let age1 = 2024 - birthYear1;

// Ввод данных для пользователя 2
let name2 = prompt("Введите имя пользователя 2:");
let birthYear2 = parseInt(prompt("Введите год рождения пользователя 2:"));
let age2 = 2024 - birthYear2;

// Ввод данных для пользователя 3
let name3 = prompt("Введите имя пользователя 3:");
let birthYear3 = parseInt(prompt("Введите год рождения пользователя 3:"));
let age3 = 2024 - birthYear3;

// Вывод списка пользователей с нумерацией
console.log(`1 '${name1}' ${age1}`);
console.log(`2 '${name2}' ${age2}`);
console.log(`3 '${name3}' ${age3}`);

// Вычисление и вывод среднего возраста
let averageAge = (age1 + age2 + age3) / 3;
console.log(`Средний возраст пользователей: ${averageAge.toFixed(0)}`);
