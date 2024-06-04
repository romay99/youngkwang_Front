import Card from "react-bootstrap/Card";

const MovieCard = (props) => {
  const id = props.id;
  return (
    <Card style={{ width: "10rem", margin: "30px" }}>
      <Card.Img variant="top" src={props.url} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
