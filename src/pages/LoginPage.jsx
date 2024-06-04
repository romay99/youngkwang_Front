import { Button } from "react-bootstrap";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import KakaoResponse from "../Dev/KakaoResponse";

const client_id = "a1b987111dbb4e0250bf964e8d93b269"; // API 키 숨기기 필요
const redirect_uri = "http://localhost:3000/test";
const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`;

function LoginPage() {
  return (
    <div className={styles.container}>
      <input className={styles.userInput} placeholder="UserName"></input>
      <input className={styles.userInput} placeholder="PassWord"></input>
      <Button className={styles.customButton} variant="outline-dark">
        로그인
      </Button>
      <Link to="/signup">
        <Button className={styles.customButton} variant="outline-dark">
          회원가입
        </Button>
      </Link>
      <Link to={kakaoURL}>
        <img src="/img/kakao_login_medium_wide.png" alt="dd"></img>
      </Link>
    </div>
  );
}

export default LoginPage;
