import React, { useState } from 'react';
import './Adicionar.css';

export default function Adicionar() {

    const [estrelas, setEstrelas] = useState(0);

    function updateStars(starIndex) {
        setEstrelas(starIndex);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const dados = {
            titulo: event.target.titulo.value,
            urlImagem: event.target.urlImagem.value,
            valor: event.target.valor.value,
            estrelas: estrelas,
        };

        console.log("Dados a serem enviados:", dados);
    }

    return (
        <div className="adicionar-container">
            <form className="adicionar-form">
                <h2>Cadastrar Novo Card</h2>
                <div className="inputs">
                    <input type="text" name="titulo" placeholder="Título" required />
                    <input type="text" name="urlImagem" placeholder="URL da Imagem" required />
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
        </div>

    );
}
