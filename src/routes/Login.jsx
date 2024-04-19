import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
 const navigate = useNavigate();

    // Hårdkodat användarnamn och lösenord
    const hardcodedUsername = "malin";
    const hardcodedPassword = "12345";
  

    useEffect(() => {
      // Kontrollera local storage vid sidans laddning
      const storedUsername = localStorage.getItem("username");
      const storedPassword = localStorage.getItem("password");
  
      if (storedUsername && storedPassword) {
        // Om användaruppgifter finns i local storage, använd dem för att identifiera en inloggad användare
        setUsername(storedUsername);
        setUserPassword(storedPassword);
        navigate("/start");
      }
    }, []); 
  

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
 if (username.trim().toLowerCase() === hardcodedUsername && userPassword === hardcodedPassword) {

  console.log("Inloggning lyckades!");
  console.log("Username and password are filled in!");
  navigate("/start");

} else {
  console.log("Fel användarnamn eller lösenord");
  console.log("användarnamn", username)
  console.log("lösenord", userPassword)
  console.log("hårdkodad användare", hardcodedUsername)
  console.log("hårdkodat lösenord", hardcodedPassword)

}
};


  return (
    <section className="login__container">
      <form className="loginform" onSubmit={onHandleSubmit}>
        <h1 className="login__container--title">Logga in</h1>

        <div className={`login__container--form ${usernameError ? "error" : ""}`}>
          <label htmlFor="username__input">Användarnamn</label>
          <input
            className="label"
            type="text"
            id="username__input"
            placeholder="Joe Doe"
            maxLength={24}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <span className="error-message">{usernameError}</span>}
        </div>

        <div className={`login__container--form ${passwordError ? "error" : ""}`}>
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
          {passwordError && <span className="error-message">{passwordError}</span>}
        </div>

        <div className="login__container--btn">
          <button type="submit" className="primary__button">
            Logga in
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
