const products = ["Яблоко", "Арбуз", "Банан", "Виноград", "Апельсин"];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; 

    products.sort();

    products.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = product;
        productList.appendChild(listItem);
    });
}

function addProduct() {
    const newProduct = prompt("Введите название товара:");
    if (newProduct) {
        products.push(newProduct);
        displayProducts();
    } else {
        alert("Название товара не введено!");
    }
}

document.getElementById('add-product').addEventListener('click', addProduct);

displayProducts();
