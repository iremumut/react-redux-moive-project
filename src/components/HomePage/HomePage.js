import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, fetchTrendingMovies } from '../../features/moviesSlice';
import MovieCard from '../MoviesPage/MovieCard';
import {Row, Col} from  "react-bootstrap";





const HomePage = () => {

  const movies = useSelector((state) => state.movies.entities.allMovies);

  const dispatch = useDispatch();


  useEffect(()=>{
    if(movies.popularMovies.length === 0){
      console.log("here");
        dispatch(fetchPopularMovies());
    }

    if(!movies.trendingMovies.length === 0){
      dispatch(fetchTrendingMovies());
    }
  },[dispatch])
  

  return (  
    <>


    </>
  )
}

export default HomePage;

/*
  {movies.popularMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>
        })}
 */