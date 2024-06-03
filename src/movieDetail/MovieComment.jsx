import styles from "./MovieComment.module.css";

const MovieComment = () => {
  return (
    <div className={styles.container}>
      <div>댓글</div>
      <div>작성자 ID</div>
      <div>작성일</div>
      <div>별점</div> {/* 별점은 존재할때만 */}
    </div>
  );
};

export default MovieComment;
