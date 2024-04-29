import React, { useState, useEffect } from "react";
import * as MUI from "@mui/material/";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // useEffect(() => {
  //   setChangeButtonsOnView("authentication");

  //   if(isUserLoggedIn) {
  //     navigate("/start");
  //   }
  // }, [isUserLoggedIn])

  const navigate = useNavigate();

  // Hårdkodat användarnamn och lösenord
  const hardcodedUsername = "malin";
  const hardcodedPassword = "12345";

  // För användare från ev backend
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setUsernameError("Du måste fylla i användarnamn");
    } else {
      setUsernameError("");
    }

    if (!userPassword) {
      setPasswordError("Du måste fylla i lösenord");
    } else {
      setPasswordError("");
    }

    // Om användarnamn och lösenord matchar den hårdkodade användaren
    if (
      username.trim().toLowerCase() === hardcodedUsername &&
      userPassword === hardcodedPassword
    ) {
      console.log("Inloggning lyckades!");
      console.log("Username and password are filled in!");
      navigate("/start");
    } else {
      console.log("Fel användarnamn eller lösenord");
      console.log("användarnamn", username);
      console.log("lösenord", userPassword);
      console.log("hårdkodad användare", hardcodedUsername);
      console.log("hårdkodat lösenord", hardcodedPassword);
    }
  };

  return (
    <MUI.Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      gap={12}
      marginTop={4}
    >
      <MUI.Container fixed maxWidth="sm">
        <MUI.Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.90)" }} elevation={2}>
          <MUI.CardHeader
            title="Logga in"
            titleTypographyProps={{ textAlign: "center" }}
          />
          <MUI.CardContent>
            <form onSubmit={onHandleSubmit}>
              <MUI.Box
                component="div"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap={2}
              >
                <MUI.FormControl>
                  <MUI.Box
                    component="div"
                    display="flex"
                    flexDirection="column"
                    className={`login__container--form ${
                      usernameError ? "error" : ""
                    }`}
                  >
                    <MUI.TextField
                      error={usernameError ? true : false}
                      label="Användarnamn*"
                      variant="filled"
                      id="username__input"
                      placeholder="Joe Doe"
                      maxLength={24}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      sx={{
                        borderBottom: "1px solid #FFF",
                        backgroundColor: "rgba(255, 255, 255, 0.09)",
                        color: "#FFF",
                      }}
                    />
                    {usernameError && (
                      <MUI.FormHelperText
                        variant="body2"
                        component="span"
                        sx={{ color: "#FF0000" }}
                      >
                        {usernameError}
                      </MUI.FormHelperText>
                    )}
                  </MUI.Box>

                  <div
                    className={`login__container--form ${
                      passwordError ? "error" : ""
                    }`}
                  >
                    <label htmlFor="password__input">Lösenord</label>
                    <input
                      className="label"
                      type="password"
                      id="password__input"
                      placeholder="****"
                      maxLength={32}
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                    />
                    {passwordError && (
                      <span className="error-message">{passwordError}</span>
                    )}
                  </div>

                  <div className="login__container--btn">
                    <button type="submit" className="primary__button">
                      Logga in
                    </button>
                  </div>
                </MUI.FormControl>
              </MUI.Box>
            </form>
          </MUI.CardContent>
        </MUI.Card>
      </MUI.Container>
    </MUI.Box>
  );
}
