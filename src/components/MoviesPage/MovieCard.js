import {Card,Col} from "react-bootstrap";
import "./MovieCard.css";
import { NavLink } from 'react-router-dom';

const MovieCard = ({movie:{title,poster_path,vote_average,overview}}) => {

    return(
    <Col lg={3} md={6}>
    <Card className="bg-dark text-white movie-card" as={NavLink} to="/">
        <Card.Img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="movie-card-image" alt={title} fluid/>
        <Card.ImgOverlay>
            <p className="movie-card-score t-b">{vote_average}</p>
            <h3 className="movie-card-title">{title}</h3>
            <p className="movie-card-info"> {overview} </p>           
        </Card.ImgOverlay>
    </Card>
    </Col>
    )
}

export default MovieCard;