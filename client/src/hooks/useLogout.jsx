import useUserContext from "./useUserContext";
export const useLogout = () => {
  const { setUserInfo } = useUserContext();
  function logout() {
    //remove user from localStorage
    localStorage.removeItem("user");
    //remove userInfo from the user context
    setUserInfo({ user: null });
  }
  return logout;
};
