import { useState } from "react";
import * as MUI from "@mui/material/";
import * as MUIIcons from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const darkTheme = MUI.createTheme({
    palette: {
      mode: "dark",
    },
  });

  const userCredentialsFilled = username.length > 0 && userPassword.length > 0;

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
      window.location.assign('../../php/manage.php')
    } else {
      console.log("Fel användarnamn eller lösenord");
      console.log("användarnamn", username);
      console.log("lösenord", userPassword);
      console.log("hårdkodad användare", hardcodedUsername);
      console.log("hårdkodat lösenord", hardcodedPassword);
    }
  };

  return (
    <MUI.ThemeProvider theme={darkTheme}>
      <MUI.Box component="section" gap={12} marginTop={4}>
        <MUI.Container fixed maxWidth="sm">
          <MUI.Box component="div" display="flex" justifyContent="center">
            <MUI.Card
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.90)" }}
              elevation={2}
            >
              <MUI.CardHeader
                title="Logga in"
                titleTypographyProps={{ textAlign: "center" }}
              />
              <MUI.CardContent>
                <MUI.Box
                  acceptCharset="UTF-8"
                  component="form"
                  role="form"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap={2}
                  spacing={4}
                  onSubmit={onHandleSubmit}
                >
                  <MUI.FormControl>
                    <MUI.TextField
                      error={usernameError ? true : false}
                      color={username.length > 0 ? "success" : undefined}
                      type="text"
                      label="Användarnamn*"
                      helperText={usernameError ? usernameError : ""}
                      variant="filled"
                      id="username__input"
                      placeholder="Joe Doe"
                      maxLength={24}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </MUI.FormControl>
                  <MUI.FormControl>
                    <MUI.TextField
                      error={passwordError ? true : false}
                      color={userPassword.length > 0 ? "success" : undefined}
                      type="password"
                      label="Lösenord*"
                      helperText={passwordError ? passwordError : ""}
                      variant="filled"
                      placeholder="****"
                      maxLength={32}
                      value={userPassword}
                      onChange={(e) => setUserPassword(e.target.value)}
                    />
                  </MUI.FormControl>
                  <MUI.Button
                    startIcon={
                      userCredentialsFilled ? (
                        <MUIIcons.Login>login</MUIIcons.Login>
                      ) : usernameError || passwordError ? (
                        <MUIIcons.Error>error</MUIIcons.Error>
                      ) : null
                    }
                    type="submit"
                    role="button"
                    variant="contained"
                    color={
                      userCredentialsFilled
                        ? "success"
                        : usernameError || passwordError
                        ? "error"
                        : "info"
                    }
                  >
                    Logga in
                  </MUI.Button>
                </MUI.Box>
              </MUI.CardContent>
            </MUI.Card>
          </MUI.Box>
        </MUI.Container>
      </MUI.Box>
    </MUI.ThemeProvider>
  );
}
