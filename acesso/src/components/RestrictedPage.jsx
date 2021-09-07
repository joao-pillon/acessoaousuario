import "./styles.css";

function RestrictedPage({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn ? (
        <div className="Tag">
          <span>Bem-vindo {user}</span>
          <button onClick={Logout}>{isLoggedIn ? "Sair" : "Entrar"}</button>
        </div>
      ) : (
        <div className="Tag">
          <span>Você não pode acessar essa página</span>
          <button onClick={Login}>{isLoggedIn ? "Sair" : "Entrar"}</button>
        </div>
      )}
    </>
  );
}

export default RestrictedPage;
