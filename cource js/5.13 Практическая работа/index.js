function addToCart(productName) {
    const cart = document.getElementById('cart');
    
    const listItem = document.createElement('li');
    
    const textNode = document.createTextNode(productName);
    
    listItem.appendChild(textNode);
    
    cart.appendChild(listItem);
}
