// Добавьте возможность ввода данных товаров с клавиатуры, используя окно ввода prompt().
// Выведете в консоль сумму всей покупки.


// Ввод данных для товара 1
let product1 = prompt("Введите название товара 1:");
let price1 = parseFloat(prompt("Введите стоимость товара 1:"));
let count1 = parseInt(prompt("Введите количество товара 1:"));
console.log(product1, price1 * count1); // Вывод в консоль

// Ввод данных для товара 2
let product2 = prompt("Введите название товара 2:");
let price2 = parseFloat(prompt("Введите стоимость товара 2:"));
let count2 = parseInt(prompt("Введите количество товара 2:"));
console.log(product2, price2 * count2); // Вывод в консоль

// Ввод данных для товара 3
let product3 = prompt("Введите название товара 3:");
let price3 = parseFloat(prompt("Введите стоимость товара 3:"));
let count3 = parseInt(prompt("Введите количество товара 3:"));
console.log(product3, price3 * count3); // Вывод в консоль

// Вычисление и вывод общей суммы покупки
let total = (price1 * count1) + (price2 * count2) + (price3 * count3);
console.log("Сумма всей покупки:", total);
