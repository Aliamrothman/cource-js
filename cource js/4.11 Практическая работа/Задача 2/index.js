function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

console.log("30 градусов Цельсия в Фаренгейтах: " + celsiusToFahrenheit(30)); 
console.log("86 градусов Фаренгейта в Цельсиях: " + fahrenheitToCelsius(86));  

console.log("15 градусов Цельсия в Фаренгейтах: " + celsiusToFahrenheit(15));  
console.log("59 градусов Фаренгейта в Цельсиях: " + fahrenheitToCelsius(59));  

console.log("50 градусов Цельсия в Фаренгейтах: " + celsiusToFahrenheit(50));  
console.log("122 градуса Фаренгейта в Цельсиях: " + fahrenheitToCelsius(122));  

