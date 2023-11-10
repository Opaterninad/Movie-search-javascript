document.getElementById("searchButton").addEventListener("click", searchMovies);

let urlBase = 'https://api.themoviedb.org/3/search/movie'
let api_key = 'c3a520c3e4b19556790cb816d9baf3e2'
let urlImg = 'https://image.tmdb.org/t/p/w500/'

let resultContainer = document.getElementById("results")

function searchMovies() {
    resultContainer.innerHTML = "Cargando..."
    let searchInput = document.getElementById("searchInput").value;

    fetch(`${urlBase}?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results));
}


function displayMovies(movies){
    resultContainer.innerHTML = ""
    if(movies.length === 0){
        resultContainer.innerHTML = ""
        resultContainer.innerHTML = "<p>No se encontrarón resultados.</p>"
        return
    }
    movies.forEach(movie => {
        let movieDiv = document.createElement("div")
        movieDiv.classList.add("movie-info")

        let title = document.createElement("h2")
        title.textContent = movie.title

        let releaseDate = document.createElement("h3")
        releaseDate.textContent = "Fecha de lanzamiento: " + movie.release_date

        let overview = document.createElement("p")
        overview.textContent = movie.overview

        let posterPath = urlImg + movie.poster_path
        let poster = document.createElement("img")
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        resultContainer.appendChild(movieDiv)
    })
}