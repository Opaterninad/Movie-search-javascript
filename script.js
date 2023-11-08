document.getElementById("searchButton").addEventListener("click", displayText, searchMovies);

function displayText(){
    var txtmovie = document.getElementById("textmovie");
    if (txtmovie.style.display === "none"){
        txtmovie.style.display = "block";
    } else {
        txtmovie.style.display = "block";
    }}

function searchMovies(){
    let searchInput = document.getElementById("searchInput").value
    
}