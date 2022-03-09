import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularActors ,fetchMovieActors } from '../../features/actorsSlice';

const ActorsPage = () => {

  const actors = useSelector((state) => state.actors.entities.actors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularActors());
    dispatch(fetchMovieActors(" 833425"));
  }, [dispatch])

  //console.log(actors);
  return (
    <div>actorsPage</div>
  )
}

export default ActorsPage;