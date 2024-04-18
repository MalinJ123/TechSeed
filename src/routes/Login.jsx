import "../styles/login.css"

function Login() {

// const [userNameError, setUserNameError] = useState("");
// const [passwordError, setPasswordError] = useState("");

// const [usernameError, setUsernameError] = useState(false);
// const [passwordError, setPasswordError] = useState(false);

// const handleLogin = () => {}

  return (
    <>
     <section className="login__container">
     <form className="loginform">
        <h1 className="login__container--title">Logga in </h1>

       <div className="login__container--form">
         <label htmlFor="username__input">Användarnamn</label>
        <input
        className="label"
          type="text"
          id="username__input"
          placeholder="Joe Doe"
          maxLength={24}
        />
       </div>

        <div className="login__container--form">
        <label htmlFor="password__input">Lösenord</label>
        <input
        className="label"
          type="text"
          id="password__input"
          placeholder="****"
          maxLength={32}
        />
        </div>

      <div className="login__container--btn">
      <button type="submit" className="primary__button">
          Logga in
        </button>
      </div>
      </form>
     </section>
    </>
  );
}
export default Login;
