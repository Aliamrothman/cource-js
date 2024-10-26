const books = ["Война и мир", "Преступление и наказание", "Мастер и Маргарита", "Анна Каренина", "Идиот"];

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; 

    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = book;
        bookList.appendChild(listItem);
    });
}

function addBook() {
    const newBook = prompt("Введите название книги:");
    if (newBook) {
        books.push(newBook);
        displayBooks();
    } else {
        alert("Название книги не введено!");
    }
}

function searchBook() {
    const searchQuery = prompt("Введите название книги для поиска:");
    const bookListItems = document.querySelectorAll('#book-list li');
    let found = false;

    bookListItems.forEach(item => {
        if (item.textContent === searchQuery) {
            item.style.backgroundColor = 'yellow';
            found = true;
        } else {
            item.style.backgroundColor = '';
        }
    });

    if (!found) {
        alert("Книга не найдена!");
    }
}

document.getElementById('add-book').addEventListener('click', addBook);
document.getElementById('search-book').addEventListener('click', searchBook);

displayBooks();
