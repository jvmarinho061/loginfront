import React, { useState } from 'react';
import './Adicionar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate

export default function Adicionar() {
    const [estrelas, setEstrelas] = useState(0);
    const navigate = useNavigate(); // Usando o hook useNavigate

    function updateStars(starIndex) {
        setEstrelas(starIndex);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const dados = {
            nome: event.target.nome.value,            
            imgUrl: event.target.imgUrl.value,      
            valor: event.target.valor.value,         
            estrela: estrelas,                        
        };

        if (!dados.nome || !dados.imgUrl || !dados.valor || !dados.estrela) {
            console.error('Preencha todos os campos!');
            return;
        }

        const url = 'http://localhost:8080/comida/adicionar';

        function ok(response) {
            console.log('Resposta do servidor:', response);
            alert('Card Cadastrado com Sucesso');
            navigate('/comida'); // Redireciona para a página de cardápio após persistência bem-sucedida
        }

        axios.post(url, dados)
            .then((response) => ok(response))
            .catch((error) => {
                console.error('Erro ao enviar os dados:', error);
            });

        console.log("Dados a serem enviados:", dados);
    }

    return (
        <div className="adicionar-container">
            <form className="adicionar-form" onSubmit={handleSubmit}>
                <h2>Cadastrar Novo Card</h2>
                <div className="inputs">
                    <input type="text" name="nome" placeholder="Título" required />
                    <input type="text" name="imgUrl" placeholder="URL da Imagem" required />
                    <input type="number" name="valor" placeholder="Valor" required />
                    <div className="estrelas">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className="star" onClick={() => updateStars(star)}>
                                <i className="bi bi-star-fill" style={{ color: star <= estrelas ? 'yellow' : 'gray' }}></i>
                            </span>
                        ))}
                    </div>
                </div>
                <button id="adicionar-form-btn" type="submit">Cadastrar</button>
            </form>
            {/* Botão para voltar para a tela de cardápio */}
            <button 
                className="voltar-btn" 
                onClick={() => navigate('/comida')} // Redireciona para a tela de cardápio ao clicar
            >
                Voltar para o Cardápio
            </button>
        </div>
    );
}
