import React, {useState} from 'react'
import { FaPray } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cadastro = () => {
    const [formData, setFormData] = useState({  //gerenciamento de estado do Cadastro de usuários
        nome:'',
        email:'',
        cpf:'',
        cep:'',
        endereco:'',
        senha:'',
        confirmarSenha:'',
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData,[name]:value});
    };

  return (
    <div>
      <h1 className="cadastro-Name">Cadastro</h1>
      <form>
        <div>
        <label>Nome:</label>
        <input 
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
        />
        </div>
        <div>
            <label>E-mail:</label>
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Senha</label>
            <input 
            type="text"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>Confirmar Senha:</label>
            <input 
            type="text"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>CPF:</label>
            <input 
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            />
        </div>
        
        <div>
            <label>Endereço:</label>
            <input
            type="text" 
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            />
        </div>
        <div>
            <label>CEP:</label>
            <input 
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            />
        </div>
      </form>
    </div>
  )
}

export default Cadastro;
