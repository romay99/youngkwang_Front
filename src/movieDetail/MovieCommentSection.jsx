import styled from "styled-components";
import MovieComment from "./MovieComment";
import { Button } from "react-bootstrap";

const CommentSection = styled.div`
  margin: 10px;
`;

const CommentInput = styled.input`
  width: 80%;
  height: 150px;
  margin: 5px;
`;

const MovieCommentSection = () => {
  return (
    <CommentSection>
      <div>
        <CommentInput></CommentInput>
        <Button variant="dark"> 댓글 입력</Button>
      </div>
      <MovieComment />
      <MovieComment />
      <MovieComment />
      <MovieComment />
      <MovieComment />
    </CommentSection>
  );
};

export default MovieCommentSection;
