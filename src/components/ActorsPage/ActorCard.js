import {Col,Card} from "react-bootstrap"
const ActorCard = ({actor:{name,known_for,profile_path}}) => {

    return(
        <Col lg={3} md={4} className="mb-3 actor-card">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${profile_path}`} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Known for: 
                </Card.Text>
                {known_for.map((movie) => {
                    return <Card.Text>{movie.title}</Card.Text>
                })}
            </Card.Body>
            </Card>
        </Col>
    )
}

export default ActorCard;