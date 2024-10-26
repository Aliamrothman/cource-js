const products = ["Мышка", "Клавиатура", "Наушники"];
const newProducts = ["Монитор", "Принтер", "Флешка"];

products.push(...newProducts);

function displayProducts() {
    const productList = document.querySelector('.products');
    productList.innerHTML = ''; 

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = product;
        productList.appendChild(listItem);
    });
}

displayProducts();
