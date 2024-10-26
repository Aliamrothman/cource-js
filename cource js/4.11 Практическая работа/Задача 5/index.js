function totalSum(price, amount, discount) {
    let total = price * amount;
    let discountAmount = total * (discount / 100);
    let finalTotal = total - discountAmount;
    return finalTotal;
}

let priceItem = 25000;
let amountItem = 3;
let discountItem = 20;

console.log(totalSum(priceItem, amountItem, discountItem));  
