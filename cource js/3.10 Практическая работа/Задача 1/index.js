
let cardInATM = true; 
let availableAmount = 500; 


function performTransaction(amount) {
    if (cardInATM && amount <= availableAmount) {
        console.log("Операция выполняется");
        availableAmount -= amount; 
    } else {
        console.log("Операция отклонена");
    }
}


let transactionAmount = parseInt(prompt("Введите сумму банковской операции:"));
performTransaction(transactionAmount);
