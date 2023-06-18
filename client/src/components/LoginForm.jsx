import { useState } from "react";
import "../styles/AuthForm.css";
import { useLogin } from "../hooks/useLogin";
import useUserContext from "../hooks/useUserContext";

export default function LoginForm({ changeForm }) {
  const { updateUserInfo } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  async function handleLogin(e) {
    e.preventDefault();
    await login(username, password);
    updateUserInfo();
  }

  function hanleFormChange() {
    changeForm("Register");
  }

  return (
    <div className="authContainer">
      <h1 className="authTitle">Login</h1>
      <form className="authForm" onSubmit={handleLogin}>
        <div className="formRow">
          <label htmlFor="">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="formRow">
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button disabled={isLoading} className="submitBtn">
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <p className="formText">
        New to JT movies?{" "}
        <span className="authChange" onClick={hanleFormChange}>
          Register now
        </span>
      </p>
    </div>
  );
}
