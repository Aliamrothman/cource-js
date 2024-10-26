const heights = [160, 170, 180, 150, 165];

function displayHeights(filteredHeights = heights) {
    const heightList = document.getElementById('height-list');
    heightList.innerHTML = '';

    filteredHeights.forEach(height => {
        const listItem = document.createElement('li');
        listItem.textContent = height;
        heightList.appendChild(listItem);
    });
}

function addHeight() {
    const newHeight = prompt("Введите рост ученика:");
    if (newHeight) {
        heights.push(Number(newHeight));
        displayHeights();
    } else {
        alert("Рост не введён!");
    }
}

function filterHeight() {
    const minHeight = prompt("Введите минимальный рост для фильтрации:");
    if (minHeight) {
        const filteredHeights = heights.filter(height => height >= Number(minHeight));
        displayHeights(filteredHeights);
    } else {
        displayHeights();
    }
}

document.getElementById('add-height').addEventListener('click', addHeight);
document.getElementById('filter-height').addEventListener('click', filterHeight);

displayHeights();
