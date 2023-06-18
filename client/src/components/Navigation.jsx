import { Link } from "react-router-dom";
import "../styles/Navigation.css";
import { useLogout } from "../hooks/useLogout";

export default function Navigation() {
  const logout = useLogout();
  const handleNavOverflow = () => {
    document.body.style.overflowY = "auto";
  };

  function handleLogout() {
    logout();
    handleNavOverflow();
  }

  function handleHamburger() {
    document.querySelector(".navLinks").classList.toggle("openHamburger");
    if (
      document.querySelector(".navLinks").classList.contains("openHamburger")
    ) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }

  return (
    <header className="navigationContainer">
      <nav className="navigation">
        <Link onClick={handleNavOverflow} to="/main">
          <img className="logo" src="/images/lightLogo.png" alt="" />
        </Link>
        <ul className="navLinks">
          <li className="navLink">
            <Link onClick={handleNavOverflow} className="navLink" to="/search">
              Search movies
            </Link>
          </li>
          <li className="navLink">
            <Link
              onClick={handleNavOverflow}
              className="navLink"
              to="/mymovies"
            >
              My movies
            </Link>
          </li>
          <li className="navLink primaryLink" onClick={handleLogout}>
            Logout
          </li>
        </ul>
        <div className="hamburger" onClick={handleHamburger}>
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </nav>
    </header>
  );
}
