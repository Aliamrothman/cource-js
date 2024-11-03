const promocodeArr = [
    { promocode: 'PROM10', gift: "10% Discount" },
    { promocode: 'PROM50', gift: "50% Discount" },
    { promocode: 'GIFT', gift: "Gift in the basket" }
];

function getCookie() {
    return document.cookie.split('; ').reduce((acc, item) => {
        const [name, value] = item.split('=');
        acc[name] = value;
        return acc;
    }, {});
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

document.addEventListener('DOMContentLoaded', () => {
    const cookie = getCookie();
    const promoForm = document.getElementById('promoForm');
    const messageDiv = document.getElementById('message');
    const promoFormContainer = document.getElementById('promoFormContainer');

    const savedPromocode = promocodeArr.find(promo => promo.promocode === cookie.promocode);
    if (savedPromocode) {
        promoForm.style.display = 'none';
        messageDiv.innerHTML = `<p class="success-message">Promo code activated! ${savedPromocode.gift}</p>`;
    }

    promoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userPromocode = document.getElementById('promocode').value;
        const validPromocode = promocodeArr.find(promo => promo.promocode === userPromocode);

        if (validPromocode) {
            setCookie('promocode', userPromocode, 7);
            promoForm.style.display = 'none';
            messageDiv.innerHTML = `<p class="success-message">Promo code activated! ${validPromocode.gift}</p>`;
        } else {
            messageDiv.innerHTML = '';
        }
    });
});
