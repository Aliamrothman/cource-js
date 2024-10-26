const numbers = [5, 12, 8, 130, 44];

function displayAllElements() {
    const allElements = document.querySelector('.all-elements');
    allElements.textContent = numbers.join(', ');
}

function findMin() {
    const minNumber = Math.min(...numbers);
    document.querySelector('.minNumber').textContent = minNumber;
}

function findMax() {
    const maxNumber = Math.max(...numbers);
    document.querySelector('.maxNumber').textContent = maxNumber;
}

document.querySelector('.min').addEventListener('click', findMin);
document.querySelector('.max').addEventListener('click', findMax);

displayAllElements();
