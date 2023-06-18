import "../styles/MainPage.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";
export default function MainPage() {
  const [authType, setAuthType] = useState("Login");
  return (
    <div className="mainPageContainer">
      <div className="mainPageLeft">
        <div className="mainPageLeftContainer">
          <img className="logo" src="../../images/lightLogo.png" alt="" />
          {authType === "Login" && <LoginForm changeForm={setAuthType} />}
          {authType === "Register" && <RegisterForm changeForm={setAuthType} />}
        </div>
      </div>
      <div className="mainPageRight"></div>
    </div>
  );
}
