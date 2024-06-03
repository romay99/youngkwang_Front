import MovieCard from "./MovieCard";
import styled from "styled-components";

const MoviePosterList = styled.div`
  display: flex;
`;

const MovieCardList = (props) => {
  return (
    <div>
      <div style={{ fontSize: "30px" }}>장르 : " "</div>
      <MoviePosterList>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </MoviePosterList>
    </div>
  );
};

export default MovieCardList;
