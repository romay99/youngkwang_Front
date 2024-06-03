import Card from "react-bootstrap/Card";
import GiveStar from "./GiveStar";
import styles from "./MovieDetail.module.css";

const MovieDetail = () => {
  return (
    <div className={styles.movieDetailContainer}>
      <Card style={{ width: "20rem", margin: "30px" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/60x80" />
      </Card>
      <div>
        <div className={styles.movieInfomation}>
          <div className={styles.MovieInfo}>제목</div>
          <div className={styles.MovieInfo}>개봉일</div>
          <div className={styles.MovieInfo}>러닝타임</div>
          <div className={styles.MovieInfo}>장르</div>
        </div>
        <div className={styles.movieSysnopsis}>영화 줄거리</div>
      </div>
      <GiveStar />
    </div>
  );
};

export default MovieDetail;
