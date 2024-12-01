import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom"; // Importando o hook useNavigate
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Usando o hook useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });

      if (response.status === 200) {
        alert("Login realizado com sucesso!");
        console.log("Resposta do servidor:", response.data);

        // Redirecionando para a página "/comida" após login bem-sucedido
        navigate("/comida"); // Redireciona para a página de cardápio
      } else {
        alert("Credenciais inválidas.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao tentar realizar o login. Tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1 className="login-title">Conecte-se</h1>
        <div className="input-field">
          <input
            type="text"
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
            <input type="checkbox" /> Manter Acesso
          </label>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="forgot-password"
          >
            Esqueceu a senha
          </a>
        </div>
        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>
      <div className="signup-link">
        <Link to={"/cadastro"} className="create-account">
          Criar Conta
        </Link>
      </div>
    </div>
  );
};

export default Login;
