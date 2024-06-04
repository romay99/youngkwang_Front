import Button from "react-bootstrap/Button";
import styles from "./NavBar.module.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className={styles.container}>
      <img></img>
      <Link to="/">
        <div className={styles.logo}>메인로고</div>
      </Link>
      <input placeholder="검색 기능" className={styles.input}></input>
      <Button variant="outline-light">검색</Button>
      <Link to="/board">
        <Button variant="outline-light">자유게시판</Button>
      </Link>
      <Link to="/login">
        <Button variant="outline-light" className={styles.button}>
          로그인
        </Button>
      </Link>
      <Link to="/signup">
        <Button variant="outline-light">회원가입</Button>
      </Link>
      <br></br>
    </div>
  );
};

export default NavBar;
