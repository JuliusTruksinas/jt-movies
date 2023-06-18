import "../styles/VideoGrid.css";
import MovieCard from "../components/MovieCard";
import { baseImageUrl } from "../config/requestOptions";
import useUserContext from "../hooks/useUserContext";

export default function VideoGrid({ data, startsWith }) {
  const { likedMovies } = useUserContext();
  return (
    <div className="videoGridContainer">
      {!startsWith
        ? data.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={`${baseImageUrl}${movie.poster_path}`}
              date={movie.release_date}
              liked={likedMovies.includes(String(movie.id))}
              movieRating={movie.vote_average}
            />
          ))
        : data
            .filter((movie) =>
              movie.title.toLowerCase().startsWith(startsWith.toLowerCase())
            )
            .map((movie) => (
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
  );
}
