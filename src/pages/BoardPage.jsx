import styles from "./BoardPage.module.css";
import BoardTitle from "../board/BoardTitle";

const BoardPage = () => {
  return (
    <div className={styles.container}>
      {response.data.map((data) => (
        <BoardTitle boardId={data.id} userId={data.userId} title={data.title} date={data.date} view={data.view} />
      ))}
    </div>
  );
};

export default BoardPage;

const response = {
  data: [
    {
      id: "1",
      title: "가나다라마바사 테스트 글제목",
      userId: "romay99",
      date: "2020-22-22",
      view: "999",
    },
    {
      id: "2",
      title: "가나다라마바사 테스트 글제목",
      userId: "romay99",
      date: "2020-22-22",
      view: "125",
    },
    {
      id: "3",
      title: "가나다라마바사 테스트 글제목",
      userId: "romay99",
      date: "2020-22-22",
      view: "111",
    },
    {
      id: "4",
      title: "가나다라마바사 테스트 글제목",
      userId: "romay99",
      date: "2020-22-22",
      view: "1124521",
    },
    {
      id: "5",
      title: "가나다라마바사 테스트 글제목",
      userId: "romay99",
      date: "2020-22-22",
      view: "12511",
    },
  ],
};
