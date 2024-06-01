import MovieCard from './MovieCard';

const MovieCardList = (props) => {
  return (
    <div style={{ backgroundColor: 'skyblue' }}>
      <div style={{ fontSize: '30px' }}>장르 : " "</div>
      <div style={{ display: 'flex' }}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieCardList;
