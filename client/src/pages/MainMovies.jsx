import "../styles/MainMovies.css";
import Navigation from "../components/Navigation";
import ScrollableSection from "../components/ScrollableSection";
import PageContainer from "../utils/PageContainer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  requestOptions,
  popularUrl,
  topRatedUrl,
  nowPlayingUrl,
} from "../config/requestOptions";

export default function MainMovies() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    fetch(popularUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => setPopular(data.results));
    fetch(topRatedUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => setTopRated(data.results));
    fetch(nowPlayingUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setNowPlaying(data.results);
      });
  }, []);

  return (
    <PageContainer>
      <Navigation />
      <div className="heroSection"></div>
      <ScrollableSection data={popular} title="Popular movies" />
      <ScrollableSection data={topRated} title="Top rated movies" />
      <ScrollableSection data={nowPlaying} title="Now playing" />
      <div className="footer">
        <h1>Didn't find anything you'd like?</h1>
        <Link to="/search" style={{ textDecoration: "none" }}>
          <button className="primaryBtn">Search for a movie</button>
        </Link>
      </div>
    </PageContainer>
  );
}
