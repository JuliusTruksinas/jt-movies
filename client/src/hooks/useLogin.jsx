import { useState } from "react";
import useUserContext from "./useUserContext";
import { requestToServerBaseUrl } from "../config/requestOptions";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { setUserInfo } = useUserContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${requestToServerBaseUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      //save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));
      //update the user Context
      setUserInfo(json);
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
