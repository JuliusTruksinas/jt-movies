import useUserContext from "../hooks/useUserContext";
import { requestToServerBaseUrl } from "../config/requestOptions";

export default function LikeButton({ liked, id }) {
  const { userInfo, setLikedMovies } = useUserContext();
  async function handleLikePost() {
    const response = await fetch(`${requestToServerBaseUrl}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify({ movieId: id }),
    });
    const data = await response.json();
    setLikedMovies(data.likedMovies);
  }

  async function handleUnlikePost() {
    const response = await fetch(`${requestToServerBaseUrl}/movies`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${userInfo.token}`,
      },
      body: JSON.stringify({ movieId: id }),
    });
    const data = await response.json();
    setLikedMovies(data.likedMovies);
  }

  if (liked) {
    return (
      <svg
        onClick={handleUnlikePost}
        xmlns="http://www.w3.org/2000/svg"
        fill="#ff6b00"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#ff6b00"
        className="movieLike"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    );
  } else {
    return (
      <svg
        onClick={handleLikePost}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="movieLike"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    );
  }
}
