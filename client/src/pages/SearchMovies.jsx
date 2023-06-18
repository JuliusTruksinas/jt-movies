import PageContainer from "../utils/PageContainer";
import Navigation from "../components/Navigation";
import VideoGrid from "../components/VideoGrid";
import "../styles/SearchMovies.css";
import { useState } from "react";
import { requestOptions } from "../config/requestOptions";

export default function SearchMovies() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSearch() {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        setIsLoading(false);
      });
    setSearch("");
  }

  return (
    <PageContainer>
      <Navigation />
      <h1 className="searchTitle">Discover new movies...</h1>
      <div className="searchBox">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {isLoading ? (
        <img
          src="../../images/loader.gif"
          style={{ width: "70px", display: "block", margin: "auto" }}
        />
      ) : (
        <VideoGrid data={results} />
      )}
    </PageContainer>
  );
}
