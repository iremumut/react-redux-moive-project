import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {Col, Card} from "react-bootstrap";
import "./Movie.css";
import { useEffect } from "react";
import axios from "axios";
import { URL, API_KEY } from "../../constants";

const Movie = () => {

    const params = useParams();

    const movies = useSelector((state) => state.movies.entities.allMovies);

    const allMovies = [...movies.popularMovies,...movies.topRatedMovies,...movies.upcomingMovies,...movies.trendingMovies];

    let movie = allMovies.filter((movie) => {
        return movie.id == params.id;
    })

    movie = movie[0];
    //console.log(movie);

   /* useEffect(async () => {
        axios.get(`${URL}movie/${movie.id}?api_key=${API_KEY}`)
        .then((res) => movie=res.data);
        
    },movie)*/


    console.log(movie);
    /*const showVideoOrPoster = movie.video? <iframe width="300" height="200"
                                            src={` https://www.youtube.com/watch?v=`}>
                                            </iframe> :  <Card.Img variant="left" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="" />
    */

    return (
        <Col>
            <Card className="bg-dark text-white">
            <Card.Img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="Card image" className="movie-backdrop" />
            <Card.ImgOverlay className="d-flex flex-row align-items-center justify-content-center">
                <Col className=" justify-content-center d-flex mx-5"  > 
                <Card.Img variant="left" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} className="movie-poster" />
                </Col>
                <Col className="justify-content-center text-center d-flex flex-column movie-details mx-5" >
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                 {movie.overview}
                </Card.Text>
                <Card.Text className="text-muted">{movie.release_date}</Card.Text>
                <Card.Text>Genres</Card.Text>
                <p>{movie.vote_average}</p>
                </Col>
            </Card.ImgOverlay>
            </Card>
        </Col>
    )
}

export default Movie;