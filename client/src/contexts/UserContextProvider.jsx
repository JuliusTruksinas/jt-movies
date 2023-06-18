import { createContext, useState, useEffect } from "react";
import { requestToServerBaseUrl } from "../config/requestOptions";
export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({ user: null });
  const [likedMovies, setLikedMovies] = useState([]);

  useEffect(updateUserInfo, []);

  function updateUserInfo() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserInfo(user);
      // Setting up the initial likedMovies
      fetch(`${requestToServerBaseUrl}/movies`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setLikedMovies(data);
        });
    }
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        likedMovies,
        setLikedMovies,
        updateUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
