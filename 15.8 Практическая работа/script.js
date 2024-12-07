const API_URL = "http://localhost:3000/films";
const form = document.getElementById("movie-form");
const tableBody = document.querySelector("#movie-table tbody");
const filterTitle = document.getElementById("filter-title");
const filterGenre = document.getElementById("filter-genre");
const filterYear = document.getElementById("filter-year");
const filterWatched = document.getElementById("filter-watched");
const deleteAllBtn = document.getElementById("delete-all");

async function fetchMovies() {
    const response = await fetch(API_URL);
    const movies = await response.json();
    displayMovies(movies);
}

function displayMovies(movies) {
    tableBody.innerHTML = "";
    movies.forEach((movie) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td>${movie.year}</td>
            <td>${movie.watched ? "Да" : "Нет"}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteMovie(${movie.id})">Удалить</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value.trim();
    const genre = document.getElementById("genre").value.trim();
    const year = document.getElementById("year").value.trim();
    const watched = document.getElementById("watched").checked;

    if (title && genre && year) {
        const newMovie = { title, genre, year: parseInt(year), watched };
        await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMovie),
        });
        fetchMovies();
        form.reset();
    }
});

async function deleteMovie(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchMovies();
}

deleteAllBtn.addEventListener("click", async () => {
    await fetch(API_URL, { method: "DELETE" });
    fetchMovies();
});

[filterTitle, filterGenre, filterYear, filterWatched].forEach((input) =>
    input.addEventListener("input", async () => {
        const title = filterTitle.value.trim();
        const genre = filterGenre.value.trim();
        const year = filterYear.value.trim();
        const watched = filterWatched.value;

        const params = new URLSearchParams({
            title,
            genre,
            year,
            watched,
        });

        const response = await fetch(`${API_URL}?${params}`);
        const movies = await response.json();
        displayMovies(movies);
    })
);

fetchMovies();
