import MovieComment from "./MovieComment";
import { Button } from "react-bootstrap";
import styles from "./MovieCommentSection.module.css";

const MovieCommentSection = () => {
  return (
    <div className={styles.commentSection}>
      <div>
        <input className={styles.commentInput}></input>
        <Button variant="dark"> 댓글 입력</Button>
      </div>
      <MovieComment />
      <MovieComment />
      <MovieComment />
      <MovieComment />
      <MovieComment />
    </div>
  );
};

export default MovieCommentSection;
