const API_KEY = "474a51139c15093dd69818fcc1448b60";
const URL = "https://api.themoviedb.org";

function fetchTrendingMovies(){
    fetch(`${URL}/movies/`)
    .then((res)=>res.json())
    .then((json)=>console.log(json))
    .catch(err => console.log(err))
}