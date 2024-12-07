const form = document.getElementById('movie-form');
const tableBody = document.querySelector('#movie-table tbody');
const sortOptions = document.getElementById('sort-options');
const sortButton = document.getElementById('sort-btn');
const errorMessage = document.getElementById('error-message');

let movies = JSON.parse(localStorage.getItem('movies')) || [];

function displayMovies() {
    tableBody.innerHTML = '';
    movies.forEach((movie, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.year}</td>
            <td>${movie.watched ? 'Yes' : 'No'}</td>
            <td>
                <button onclick="editMovie(${index})">Edit</button>
                <button onclick="deleteMovie(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const genre = document.getElementById('genre').value.trim();
    const year = document.getElementById('year').value.trim();
    const watched = document.getElementById('watched').checked;

    if (!title || !genre || !year) {
        errorMessage.style.display = 'block';
        return;
    }
    errorMessage.style.display = 'none';

    const movie = { title, genre, year: parseInt(year), watched };
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
    form.reset();
});

function deleteMovie(index) {
    movies.splice(index, 1);
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
}

function editMovie(index) {
    const movie = movies[index];
    document.getElementById('title').value = movie.title;
    document.getElementById('genre').value = movie.genre;
    document.getElementById('year').value = movie.year;
    document.getElementById('watched').checked = movie.watched;

    deleteMovie(index);
}

sortButton.addEventListener('click', () => {
    const sortBy = sortOptions.value;
    movies.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });
    localStorage.setItem('movies', JSON.stringify(movies));
    displayMovies();
});

displayMovies();
