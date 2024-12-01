import React, { useState } from 'react';
import './Cadastro.css';
import axios from 'axios';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    login: '', 
    password: '', 
    confirmarSenha: '', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (!Object.values(formData).every((field) => field.trim() !== '')) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/auth/register', {
        login: formData.login,
        password: formData.password, 
      });

      if (response.status === 200) {
        alert("Cadastro realizado com sucesso!");
      }
    } catch (error) {
      console.error("Erro ao realizar o cadastro:", error);
      alert("Erro ao tentar realizar o cadastro. Tente novamente.");
    }
  };

  return (
    <div className="cadastro-container">
      <h1 className="cadastro-title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        {/* Login */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="text"
              id="login"
              name="login"
              value={formData.login}
              onChange={handleChange}
              required
            />
            <label htmlFor="login">Login</label>
          </div>
        </div>

        {/* Senha */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Senha</label>
          </div>
        </div>

        {/* Confirmar Senha */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              required
            />
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
          </div>
        </div>

        {/* Botão */}
        <button type="submit" className="btn-cadastrar">
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
