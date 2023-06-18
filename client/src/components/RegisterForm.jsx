import { useState } from "react";
import "../styles/AuthForm.css";
import { useRegister } from "../hooks/useRegister";
import useUserContext from "../hooks/useUserContext";

export default function RegisterForm({ changeForm }) {
  const { updateUserInfo } = useUserContext();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register, error, isLoading } = useRegister();

  async function handleRegister(e) {
    e.preventDefault();
    await register(username, password);
    updateUserInfo();
  }

  function hanleFormChange() {
    changeForm("Login");
  }
  return (
    <div className="authContainer">
      <h1 className="authTitle">Register</h1>
      <form className="authForm" onSubmit={handleRegister}>
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
          Register
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <p className="formText">
        Already have an account?{" "}
        <span className="authChange" onClick={hanleFormChange}>
          Login now
        </span>
      </p>
    </div>
  );
}
