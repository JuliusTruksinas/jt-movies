import Navigation from "../components/Navigation";
import "../styles/UserMovies.css";
import PageContainer from "../utils/PageContainer";
import VideoGrid from "../components/VideoGrid";
import { useEffect, useState } from "react";
import { requestOptions } from "../config/requestOptions";
import "../styles/SearchMovies.css";
import useUserContext from "../hooks/useUserContext";

export default function UserMovies() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const { likedMovies } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    Promise.all(
      likedMovies
        .map((movieId) => `https://api.themoviedb.org/3/movie/${movieId}`)
        .map((requestUrl) => fetch(requestUrl, requestOptions))
    )
      .then((responses) =>
        Promise.all(responses.map((response) => response.json()))
      )
      .then((movies) => {
        setIsLoading(false);
        setResults(movies);
      });
  }, [likedMovies]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <PageContainer>
      <Navigation />
      <h1 className="searchTitle">Your movies...❤️</h1>
      <div className="searchBox">
        <input type="text" value={search} onChange={handleSearch} />
      </div>
      {isLoading ? (
        <img
          src="../../images/loader.gif"
          style={{ width: "70px", display: "block", margin: "auto" }}
        />
      ) : (
        <VideoGrid data={results} startsWith={search} />
      )}
    </PageContainer>
  );
}
