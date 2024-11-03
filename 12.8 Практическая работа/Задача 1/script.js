document.addEventListener('DOMContentLoaded', () => {
    const giftArr = [
        { title: "20% discount on your first purchase in our store!", icon: "/img/discount.svg" },
        { title: "10% discount on everything!", icon: "/img/discount_2.svg" },
        { title: "Gift with your first purchase in our store!", icon: "/img/gift.svg" },
        { title: "Free delivery for you!", icon: "/img/delivery.svg" },
        { title: "Today is a big discount day!", icon: "/img/discount_3.svg" }
    ];

    const popup = document.getElementById('popup');
    const giftIcon = document.getElementById('giftIcon');
    const giftTitle = document.getElementById('giftTitle');
    const closeButton = document.getElementById('closeButton');

    const showPopup = () => {
        const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];
        giftIcon.src = randomGift.icon;
        giftTitle.textContent = randomGift.title;
        popup.classList.remove('hidden');
    };

    setTimeout(showPopup, 3000);

    closeButton.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
});
