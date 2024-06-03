import styled from "styled-components";
import { Button } from "react-bootstrap";

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UserInput = styled.input`
  margin-bottom: 8px;
  width: 300px;
  border-radius: 12px;
`;

const CustomButton = styled(Button)`
  width: 300px;
  margin-bottom: 8px;
`;

const KakaoLoginButton = styled.img`
  width: 300px;
`;

function LoginPage() {
  return (
    <Container>
      <UserInput placeholder="UserName"></UserInput>
      <UserInput placeholder="PassWord"></UserInput>
      <CustomButton variant="outline-dark">로그인</CustomButton>
      <CustomButton variant="outline-dark">회원가입</CustomButton>
      <KakaoLoginButton src="/img/kakao_login_medium_wide.png" alt="dd"></KakaoLoginButton>
    </Container>
  );
}

export default LoginPage;
