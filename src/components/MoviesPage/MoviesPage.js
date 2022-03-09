import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchTrendingMovies } from '../../features/moviesSlice';
import MovieCard from './MovieCard';
import { Row } from 'react-bootstrap';

const MoviesPage = () => {

  const movies = useSelector((state) => state.movies.entities.allMovies);

  const dispatch = useDispatch();

  let allMovies = [];

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTrendingMovies());
  }, [dispatch]);

  allMovies = [...movies.popularMovies,...movies.topRatedMovies,...movies.upcomingMovies,...movies.trendingMovies];

  
  console.log(allMovies);
 


  return (
    <Row className='my-2'>
        {allMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>
        })}
    </Row>

  )
}

export default MoviesPage;