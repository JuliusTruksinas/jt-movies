import "../styles/MovieCard.css";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";

export default function MovieCard({ title, date, image, id, liked }) {
  return (
    <div className="movieContainer">
      <Link to={`/movie/${id}`}>
        <img className="movieImg" src={image} alt="" />
      </Link>
      <div className="movieRow">
        <h3 className="movieTitle">{title}</h3>
        <LikeButton id={id} liked={liked} />
      </div>
      <span className="movieDate">{date}</span>
    </div>
  );
}
