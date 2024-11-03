document.addEventListener('DOMContentLoaded', () => {
    const prices = [100, 500, 250, 750, 300];
    const priceList = document.getElementById('priceList');
    const sortAscButton = document.getElementById('sortAscButton');
    const sortDescButton = document.getElementById('sortDescButton');

    const displayPrices = (prices) => {
        priceList.innerHTML = '';
        prices.forEach(price => {
            const listItem = document.createElement('li');
            listItem.textContent = price;
            priceList.appendChild(listItem);
        });
    };

    const sortPricesAsc = () => {
        const sortedPrices = [...prices].sort((a, b) => a - b);
        displayPrices(sortedPrices);
    };

    const sortPricesDesc = () => {
        const sortedPrices = [...prices].sort((a, b) => b - a);
        displayPrices(sortedPrices);
    };

    sortAscButton.addEventListener('click', sortPricesAsc);
    sortDescButton.addEventListener('click', sortPricesDesc);

    displayPrices(prices);
});
