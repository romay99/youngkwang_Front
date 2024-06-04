import React from "react";
import styles from "./BoardTitle.module.css";

const BoardTitle = (props) => {
  const boardId = props.boardId;
  return (
    <div className={styles.container}>
      <div>{props.title}</div>
      <div>{props.userId}</div>
      <div>{props.date}</div>
      <div className={styles.view}>{props.view} 회</div>
    </div>
  );
};

export default BoardTitle;
