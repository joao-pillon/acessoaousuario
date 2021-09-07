import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "João";

  function Login() {
    setIsLoggedIn(true);
  }

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="Login">
        <img src={logo} className="App-logo" alt="logo" />

        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        ></RestrictedPage>
      </header>
    </div>
  );
}

export default App;
