import React from "react";
import { useSetAtom } from "jotai";
import { currentUserAtom } from "../../Atoms/currentuser";

export default function LogIn() {
  const setUser = useSetAtom(currentUserAtom);

  const authenticate = (event) => {
    event.preventDefault();
    const formUsername = event.target.elements.usernameArea.value;
    const formPassword = event.target.elements.passwordArea.value;
    const data = {
      identifier: formUsername,
      password: formPassword,
    };

    fetch("", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Authentication failed");
        }
      })
      .then((responseData) => {
        const token = responseData.jwt;
        setUser(token);
        alert("Connexion réussie");
      })
      .catch((error) => {
        console.log("Authentication error:", error);
        alert("Authentication failed");
      });
  };

  return (
    <>
      <h1>Connecte toi ici</h1>
      <form onSubmit={authenticate}>
        <label>
          Username:
          <input
            type="text"
            name="usernameArea"
            placeholder="Enter your username or email"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="passwordArea"
            placeholder="Enter your password."
          />
        </label>

        <button type="submit">Connexion</button>
      </form>
    </>
  );
}
