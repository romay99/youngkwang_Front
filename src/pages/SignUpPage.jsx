import React, { useState } from "react";
import styles from "./SignUpPage.module.css";
import { Button } from "react-bootstrap";
import axios from "axios";

const SignUpPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
    sex: false,
    birthdate: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    console.log(userData);
  };

  const trySignUp = () => {
    axios({ method: "post", url: "http://localhost:8080/user/signup", data: userData }).then().catch();
  };

  return (
    <div className={styles.container}>
      <input className={styles.userInput} placeholder="Email" onChange={handleChange} name="email"></input>
      <input className={styles.userInput} placeholder="Name" onChange={handleChange} name="name"></input>
      <input className={styles.userInput} placeholder="PassWord" onChange={handleChange} name="password"></input>
      <input className={styles.userInput} placeholder="Confirm PassWord"></input>
      <label for="">
        남자
        <input className={styles.userInput} placeholder="성별" onChange={handleChange} name="sex" type="radio" value="1"></input>
      </label>
      <br></br>
      <label for="">
        여자
        <input className={styles.userInput} placeholder="성별" onChange={handleChange} name="sex" type="radio" value="0"></input>
      </label>
      <br></br>
      <input className={styles.userInput} placeholder="생일" onChange={handleChange} name="birthdate"></input>
      <Button
        onClick={() => {
          trySignUp();
        }}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignUpPage;
