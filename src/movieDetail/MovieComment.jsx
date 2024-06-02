import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const MovieComment = () => {
  return (
    <Container>
      <div>댓글</div>
      <div>작성자 ID</div>
      <div>작성일</div>
      <div>별점</div>
    </Container>
  );
};

export default MovieComment;
