import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux";
import { fetchMovies } from '../../features/moviesSlice';

const MoviesPage = () => {

  const movies = useSelector((state) => state.movies.entities.movies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  },[dispatch])

  console.log(movies);

  return (
    <>
    <div>moviesPage</div>
    {movies?.map((movie) => {
      return <div key={movie.id}>{movie.original_title}</div>
    })}
    </>
  )
}

export default MoviesPage;