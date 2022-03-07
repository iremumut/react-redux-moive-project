import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, fetchTrendingMovies } from '../../features/moviesSlice';

const MoviesPage = () => {

  const movies = useSelector((state) => state.movies.entities.allMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchUpcomingMovies());
    dispatch(fetchTrendingMovies());
  },[dispatch])

  console.log(movies);

  return (
    <>
    <div>moviesPage</div>
    <div>
    <div>Popular Movies</div>
    {movies.popularMovies?.map((movie) => {
      return <div key={movie.id}>{movie.original_title}</div>
    })}
    <hr/>
    </div>

    <div>
    <div>Top Rated Movies</div>
    {movies.topRatedMovies?.map((movie) => {
      return <div key={movie.id}>{movie.original_title}</div>
    })}
    <hr/>
    </div>

    <div>
    <div>Upcoming Movies</div>
    {movies.upcomingMovies?.map((movie) => {
      return <div key={movie.id}>{movie.original_title}</div>
    })}
    <hr/>
    </div>

    <div>
    <div>Trending Movies(weekly)</div>
    {movies.trendingMovies?.map((movie) => {
      return <div key={movie.id}>{movie.original_title}</div>
    })}
    <hr/>
    </div>
    </>

  )
}

export default MoviesPage;