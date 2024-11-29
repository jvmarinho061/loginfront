import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    cep: '',
    endereco: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="cadastro-container">
      <h1 className="cadastro-title">Cadastre-se</h1>
      <form>
        {/* Nome */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
            <label htmlFor="nome">Nome</label>
          </div>
        </div>

        {/* E-mail */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">E-mail</label>
          </div>
        </div>

        {/* Senha */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              required
            />
            <label htmlFor="senha">Senha</label>
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

        {/* CPF */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
            <label htmlFor="cpf">CPF</label>
          </div>
        </div>

        {/* Endereço */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="text"
              id="endereco"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              required
            />
            <label htmlFor="endereco">Endereço</label>
          </div>
        </div>

        {/* CEP */}
        <div className="form-group">
          <div className="input-container">
            <input
              type="text"
              id="cep"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              required
            />
            <label htmlFor="cep">CEP</label>
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
