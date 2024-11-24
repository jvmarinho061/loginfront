import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Preencha todos os campos!");
      return;
    }
    console.log("Envio:", { username, password });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Acesse o sistema!</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="Email..."
            aria-label="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha..."
            aria-label="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" /> Lembrar de mim
          </label>
          <a href="#" onClick={(e) => e.preventDefault()} className="forgot-password">
            Esqueceu a senha
          </a>
        </div>
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
      <div className="signup-link">
        <a href="#" className="create-account">
          Criar Conta
        </a>
      </div>
    </div>
  );
};

export default Login;
