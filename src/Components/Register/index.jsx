import React from "react";
import { useAtom } from "jotai";
import { currentUserAtom } from "../../Atoms/currentuser";

export default function Register() {
  const [user, setUser] = useAtom(currentUserAtom);

  const saveProfile = (event) => {
    event.preventDefault();
    const formUsername = event.target.elements.usernameArea.value;
    const formEmail = event.target.elements.emailArea.value;
    const formPassword = event.target.elements.passwordArea.value;
    const data = {
      username: formUsername,
      email: formEmail,
      password: formPassword,
    };

    fetch("", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        const token = responseData.jwt;
        setUser(token);
        console.log(user);
      });

    alert(
      "Profil saved successfully: " +
        data.username +
        " " +
        data.email +
        " " +
        data.password
    );
  };

  return (
    <>
      <h1>Create a new profile here</h1>
      <form onSubmit={saveProfile}>
        <label>
          Username:
          <input
            type="text"
            name="usernameArea"
            placeholder="Enter a username"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="emailArea"
            placeholder="Enter an email"
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="passwordArea"
            placeholder="Enter a valid password (one maj one number 8 char min)."
          />
        </label>

        <button type="submit">Create Profile</button>
      </form>
    </>
  );
}
