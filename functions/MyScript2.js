
function Movie(title, director, genre){
    this.title = title;
    this.director = director;
    this.genre = genre;
}

console.log(movies);

(function () {
    var movies = [
        new Movie("Nightmare Before Christmas", "Directed by: Henry Selick", "Animation film"),
        new Movie("The Emperor's New Groove", "Directed by: Mark Dindal", "Animation film")
    ]
    
    function display(list)
    {
        alert(JSON.stringify(list, null, 4));
    }

    display(movies);
  })();