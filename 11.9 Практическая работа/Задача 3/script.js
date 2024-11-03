document.addEventListener('DOMContentLoaded', () => {
    const cardTextInput = document.getElementById('cardText');
    const cardColorSelect = document.getElementById('cardColor');
    const card = document.getElementById('card');

    cardTextInput.addEventListener('input', () => {
        card.textContent = cardTextInput.value;
    });

    cardTextInput.addEventListener('focus', () => {
        cardTextInput.style.borderColor = 'blue';
        cardTextInput.style.backgroundColor = '#e0f7fa';
    });

    cardTextInput.addEventListener('blur', () => {
        cardTextInput.style.borderColor = '';
        cardTextInput.style.backgroundColor = '';
    });

    cardColorSelect.addEventListener('change', () => {
        card.style.backgroundColor = cardColorSelect.value;
    });
});
