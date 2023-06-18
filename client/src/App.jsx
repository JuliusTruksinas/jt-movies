import MainMovies from "./pages/MainMovies";
import MainPage from "./pages/MainPage";
import { Routes, Route, Navigate } from "react-router-dom";
import UserMovies from "./pages/UserMovies";
import SearchMovies from "./pages/SearchMovies";
import Movie from "./pages/Movie";
import useUserContext from "./hooks/useUserContext";

function App() {
  const { userInfo } = useUserContext();

  return (
    <Routes>
      <Route
        path="/"
        element={userInfo.user ? <Navigate to="/main" /> : <MainPage />}
      />
      <Route
        path="/main"
        element={userInfo.user ? <MainMovies /> : <Navigate to="/" />}
      />
      <Route
        path="/mymovies"
        element={userInfo.user ? <UserMovies /> : <Navigate to="/" />}
      />
      <Route
        path="/search"
        element={userInfo.user ? <SearchMovies /> : <Navigate to="/" />}
      />
      <Route
        path="/movie/:movieId"
        element={userInfo.user ? <Movie /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
