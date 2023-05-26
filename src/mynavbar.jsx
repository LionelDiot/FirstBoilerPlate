import React from "react";
import { Link } from "react-router-dom";
import { useSetAtom, useAtomValue} from "jotai";
import { currentUserAtom } from "./Atoms/currentuser";
import { loggedInAtom } from "./Atoms/loggedin";

export default function MyNavbar({ darkMode, toggleDarkMode }) {
  const loggedIn = useAtomValue(loggedInAtom);
  const setUser = useSetAtom(currentUserAtom);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav>
      <div>
        <Link to="/">FaitBouillirPlat</Link>
      </div>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <ul>
        {loggedIn ? (
          <>
            <li>
              <Link to="/myprofile">Mon Profil</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Se déconnecter</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">S'inscrire</Link>
            </li>
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
