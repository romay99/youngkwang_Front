import { Button } from "react-bootstrap";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <input className={styles.userInput} placeholder="UserName"></input>
      <input className={styles.userInput} placeholder="PassWord"></input>
      <Button className={styles.customButton} variant="outline-dark">
        로그인
      </Button>
      <Button className={styles.customButton} variant="outline-dark">
        회원가입
      </Button>
      <img src="/img/kakao_login_medium_wide.png" alt="dd"></img>
    </div>
  );
}

export default LoginPage;
