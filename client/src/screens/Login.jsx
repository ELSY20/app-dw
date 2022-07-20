import { useState } from "react";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="login-screens">
      <div className="container-login">
        <div className="header-login">
          <h3>Login</h3>
        </div>
        <div className="form-login">
          <form>
            <input type="text" value={username} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
