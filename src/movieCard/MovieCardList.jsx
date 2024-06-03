import MovieCard from "./MovieCard";
import styles from "./MovieCardList.module.css";

const MovieCardList = (props) => {
  return (
    <div>
      <div style={{ fontSize: "30px" }}>장르 : " "</div>
      <div className={styles.moviePosterList}>
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
