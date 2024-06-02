import styled from "styled-components";
import MovieComment from "./MovieComment";

const CommentSection = styled.div`
  display: flex;
`;

const MovieCommentSection = () => {
  return (
    <div>
      <div>
        <input></input>
        <button> 댓글 입력</button>
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
