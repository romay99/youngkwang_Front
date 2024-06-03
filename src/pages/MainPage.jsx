import MovieCard from "../movieCard/MovieCard";
import styles from "./MainPage.module.css";
const MainPage = (props) => {
  return (
    <div className={styles.container}>
      {response.data.map((data) => (
        <MovieCard title={data.title} url={data.url} id={data.id} />
      ))}
    </div>
  );
};
export default MainPage;

const response = {
  data: [
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
    {
      id: "1",
      title: "영화제목1245",
      url: "https://via.placeholder.com/60x80",
    },
  ],
};
