import { useState } from "react";
import { registerUser } from "../api/login.api";
import "../styles/register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const submitRegisterUserHandler = (e) => {
    e.preventDefault();
    registerUser({
      username: username,
      password: password,
    });
  };

  return (
    <div className="register-user">
      <div className="container-register">
        <div className="header-login">
          <h3>Registrar Usuario</h3>
        </div>
        <div className="form-register">
          <form>
            <input
              type="text"
              value={username}
              placeholder="Ingresa tu usuario"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn-login" onClick={submitRegisterUserHandler} >Registrar</button>
          </form>
        </div>
        <div className="login-footer">
          <span>
            Ya tienes una cuenta <a href="/login">Inicia sesion</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
