
function Movie(title, director, genre){
    this.title = title;
    this.director = director;
    this.genre = genre;
}
var movies = [
    new Movie("Spider-Man: Into the Spiderverse", "Directed by: Peter Ramsey", "Action film"),
    new Movie("Mune", "Directed by: Alexandre Haboyan", "fantasy film")
]
console.log(movies);

(function (list) {

    function display(list)
    {
        alert(JSON.stringify(list, null, 4));
    }

    display(list);
})(movies);