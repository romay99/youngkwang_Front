import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./NavBar.module.css";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = (props) => {
  return (
    <div className={styles.container}>
      <img></img>
      <div className={styles.logo}>메인로고</div>
      <input placeholder="검색 기능" className={styles.input}></input>
      <Button variant="outline-light">검색</Button>{" "}
      <Button variant="outline-light" style={{ marginLeft: "100px" }}>
        자유게시판
      </Button>
      <Button variant="outline-light" className={styles.button}>
        로그인
      </Button>
      <Button variant="outline-light">회원가입</Button>
      <br></br>
    </div>
  );
};

export default NavBar;
