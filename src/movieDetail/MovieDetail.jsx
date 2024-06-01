import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const MovieDetailContainer = styled.div`
  display: flex;
  border-style: solid;
`;

const MovieInfomationContainer = styled.div``;

const MovieInfomation = styled.div`
  display: flex;
  justify-content: center;
  border-style: solid;
  margin: 10px;
  width: 200%;
`;

const MovieSysnopsis = styled.div`
  border-style: solid;
  margin: 10px;
  width: 200%;
  height: 50%;
`;

const MovieInfo = styled.span`
  width: 100px;
  margin: 10px;
  border-style: solid;
`;

const MovieDetail = () => {
  return (
    <MovieDetailContainer>
      <Card style={{ width: '20rem', margin: '30px' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/60x80" />
      </Card>
      <MovieInfomationContainer>
        <MovieInfomation>
          <MovieInfo>제목</MovieInfo>
          <MovieInfo>개봉일</MovieInfo>
          <MovieInfo>러닝타임</MovieInfo>
          <MovieInfo>장르</MovieInfo>
        </MovieInfomation>
        <MovieSysnopsis>영화 줄거리</MovieSysnopsis>
      </MovieInfomationContainer>
    </MovieDetailContainer>
  );
};

export default MovieDetail;
