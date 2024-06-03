import NavBar from "./navigation/NavBar";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MovieDetailViewPage from "./pages/MovieDetailViewPage";

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <MovieDetailViewPage />
      <LoginPage />
    </>
  );
}

export default App;
