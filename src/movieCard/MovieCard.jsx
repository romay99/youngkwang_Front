import Card from 'react-bootstrap/Card';

const MovieCard = (props) => {
  return (
    <Card style={{ width: '10rem', margin: '30px' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/60x80" />
      <Card.Body>
        <Card.Title>Movie Title</Card.Title>{' '}
        {/* Card.Title 을 영화 제목으로 수정*/}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
