import NavBar from "./navigation/NavBar";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import MovieDetailViewPage from "./pages/MovieDetailViewPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardPage from "./pages/BoardPage";
import SignUpPage from "./pages/SignUpPage";
import KakaoResponse from "./Dev/KakaoResponse";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/detail/:movieId" element={<MovieDetailViewPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/board" element={<BoardPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/test" element={<KakaoResponse />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
