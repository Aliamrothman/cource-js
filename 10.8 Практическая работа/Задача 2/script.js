document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('dynamicList');
    const addItemButton = document.getElementById('addItemButton');
    const removeItemButton = document.getElementById('removeItemButton');

    const addItem = () => {
        const newItem = document.createElement('li');
        newItem.textContent = 'Новый элемент списка';
        list.appendChild(newItem);
    };

    const removeItem = () => {
        if (list.lastChild) {
            list.removeChild(list.lastChild);
        }
    };

    addItemButton.addEventListener('click', addItem);
    removeItemButton.addEventListener('click', removeItem);
});
