import styled from "styled-components";

const Container = styled.div`
  display: flex;
  border-style: solid;
  margin: 5px;
`;

const MovieComment = () => {
  return (
    <Container>
      <div>댓글</div>
      <div>작성자 ID</div>
      <div>작성일</div>
      <div>별점</div> {/* 별점은 존재할때만 */}
    </Container>
  );
};

export default MovieComment;
