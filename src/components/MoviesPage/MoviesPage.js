import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchTrendingMovies } from '../../features/moviesSlice';
import MovieCard from './MovieCard';
import { Row } from 'react-bootstrap';

const MoviesPage = () => {

  const movies = useSelector((state) => state.movies.entities.allMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTrendingMovies());
  }, [dispatch])

  console.log(movies);

  return (
    <>
      <div>moviesPage</div>
      <div>
        <Row>
        <h2>Popular Movies</h2>
        {movies.popularMovies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>
        })}
        <hr />
        </Row>
      </div>

      <div>
        <h2>Top Rated Movies</h2>
        {movies.topRatedMovies?.map((movie) => {
          return <div key={movie.id}>{movie.original_title}</div>
        })}
        <hr />
      </div>

      <div>
        <h2>Upcoming Movies</h2>
        {movies.upcomingMovies?.map((movie) => {
          return <div key={movie.id}>{movie.original_title}</div>
        })}
        <hr />
      </div>

      <div>
        <h2>Trending Movies(weekly)</h2>
        {movies.trendingMovies?.map((movie) => {
          return <div key={movie.id}>{movie.original_title}</div>
        })}
        <hr />
      </div>
    </>

  )
}

export default MoviesPage;