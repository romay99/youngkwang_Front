import styled from "styled-components";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

const Container = styled.div`
  flex-direction: column;
`;

const GiveStarButton = styled(Button)`
  justify-content: center;
  width: 100px;
`;

const GiveStar = () => {
  return (
    <Container>
      <Card.Img src="https://via.placeholder.com/20x30" />
      <GiveStarButton variant="outline-dark">별점주기</GiveStarButton>
    </Container>
  );
};

export default GiveStar;
