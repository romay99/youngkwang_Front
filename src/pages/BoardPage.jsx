import styles from "./BoardPage.module.css";
import BoardTitle from "../board/BoardTitle";
import { useEffect, useState } from "react";
import axios from "axios";

const BoardPage = () => {
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios("http://localhost:8080/board/home").then((result) => {
        setBoardData(result.data);
      });
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {boardData.map((data) => (
        <BoardTitle boardId={data.boardCode} key={data.boardCode} title={data.boardTitle} userId={data.userNickName} view={data.boardView} date={data.boardDate} />
      ))}
    </div>
  );
};

export default BoardPage;

// const response = {
//   data: [
//     {
//       id: "1",
//       title: "가나다라마바사 테스트 글제목",
//       userId: "romay99",
//       date: "2020-22-22",
//       view: "999",
//     },
//     {
//       id: "2",
//       title: "가나다라마바사 테스트 글제목",
//       userId: "romay99",
//       date: "2020-22-22",
//       view: "125",
//     },
//     {
//       id: "3",
//       title: "가나다라마바사 테스트 글제목",
//       userId: "romay99",
//       date: "2020-22-22",
//       view: "111",
//     },
//     {
//       id: "4",
//       title: "가나다라마바사 테스트 글제목",
//       userId: "romay99",
//       date: "2020-22-22",
//       view: "1124521",
//     },
//     {
//       id: "5",
//       title: "가나다라마바사 테스트 글제목",
//       userId: "romay99",
//       date: "2020-22-22",
//       view: "12511",
//     },
//   ],
// };
