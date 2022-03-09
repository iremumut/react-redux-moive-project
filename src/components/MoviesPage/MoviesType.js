import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchTrendingMovies } from '../../features/moviesSlice';
import MovieCard from './MovieCard';
import {Col,Row} from "react-bootstrap";

const MoviesType = ({ type }) => {
    const movies = useSelector(store => store.movies.entities.allMovies[`${type}Movies`])
    console.log("🚀 ~ file: MoviesType.js ~ line 7 ~ MoviesType ~ movies", movies)

    const dispatch = useDispatch();

    let title;
    let fetchFunction;

    switch (type) {
        case "popular":
            title = "Popular";
            fetchFunction = fetchPopularMovies;
            break;
        case "topRated":
            title = "Top Rated";
            fetchFunction = fetchTopRatedMovies;
            break;
        case "trending":
            title = "Trending";
            fetchFunction = fetchTrendingMovies;
            break;
        case "upcoming":
            title = "Upcoming";
            fetchFunction = fetchUpcomingMovies;
            break;
        default:
            break;
    }

    useEffect(() => {
        if (movies.length === 0) {
            dispatch(fetchFunction());
        }
    }, [dispatch, fetchFunction, movies])

    console.log(title);


    return (
        <Row>
            <h2 className='text-center fs-1'>{title} Movies</h2>
                {movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie}></MovieCard>
                })}
        </Row>
    )
}

export default MoviesType