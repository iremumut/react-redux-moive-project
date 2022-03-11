import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularActors ,fetchMovieActors } from '../../features/actorsSlice';
import ActorCard from "./ActorCard";
import {Row} from  "react-bootstrap";
import { v4 as uuid } from 'uuid';


const ActorsPage = () => {

  const actors = useSelector((state) => state.actors.entities.actors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularActors());
    //dispatch(fetchMovieActors("833425"));
  }, [dispatch])

  console.log(actors);
  return (
    <Row>
      {actors.map((actor) => {
        return <ActorCard key={uuid()} actor={actor}></ActorCard>
      })}
    </Row>
  )
}

export default ActorsPage;