const promocodeObj = {
    promocode: "PROM50",
    gift: "50% Discount"
};

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

    if (cookie.promocode === promocodeObj.promocode) {
        promoForm.style.display = 'none';
        messageDiv.innerHTML = `<p class="success-message">Promo code activated! ${promocodeObj.gift}</p>`;
    }

    promoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userPromocode = document.getElementById('promocode').value;

        if (userPromocode === promocodeObj.promocode) {
            setCookie('promocode', userPromocode, 7);
            promoForm.style.display = 'none';
            messageDiv.innerHTML = `<p class="success-message">Promo code activated! ${promocodeObj.gift}</p>`;
        } else {
            messageDiv.innerHTML = '';
        }
    });
});
