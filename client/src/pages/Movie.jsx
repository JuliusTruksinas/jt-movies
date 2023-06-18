import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import PageContainer from "../utils/PageContainer";
import { useEffect, useState } from "react";
import {
  requestOptions,
  baseImageUrl,
  baseImdbUrl,
} from "../config/requestOptions";
import "../styles/Movie.css";
import LikeButton from "../components/LikeButton";
import useUserContext from "../hooks/useUserContext";

export default function Movie() {
  const { likedMovies } = useUserContext();
  const { movieId } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <PageContainer>
      <Navigation />
      <div
        className="bannerSection"
        style={{
          backgroundImage: `url(${baseImageUrl}${data.backdrop_path})`,
        }}
      ></div>
      <div className="movieInfoContainer">
        <img
          className="movieInfoImg"
          src={`${baseImageUrl}${data.poster_path}`}
          alt=""
        />
        <div className="movieInfo">
          <h1 className="bannerTitle">{data.title}</h1>
          <p className="bannerSummary">{data.overview}</p>
          <div className="movieBtnContainer">
            <a
              target="_blank"
              href={baseImdbUrl + data.imdb_id}
              style={{ color: "#e5e7eb", textDecoration: "none" }}
            >
              <button className="primaryBtn">Learn more</button>
            </a>
            <LikeButton id={movieId} liked={likedMovies.includes(movieId)} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
