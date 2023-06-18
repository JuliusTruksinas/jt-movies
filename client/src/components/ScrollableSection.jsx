import "../styles/ScrollableSection.css";
import MovieCard from "./MovieCard";
import { baseImageUrl } from "../config/requestOptions";
import useUserContext from "../hooks/useUserContext";

export default function ScrollableSection({ data, title }) {
  const { likedMovies } = useUserContext();

  return (
    <div className="scrollableSectionContainer">
      <h2 className="scrollableSectionTitle">{title}</h2>
      <div className="scrollableSection">
        <div className="movies">
          {!data.length && (
            <img
              src="/images/loader.gif"
              style={{ width: "70px", display: "block", margin: "auto" }}
            />
          )}
          {data.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={`${baseImageUrl}${movie.poster_path}`}
              date={movie.release_date}
              liked={likedMovies.includes(String(movie.id))}
              movieRating={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
